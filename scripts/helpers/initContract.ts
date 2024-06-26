// import { SigningCosmWasmClient } from "cosmwasm";
import { toBinary, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

import { Cw20Coin, InstantiateMsg } from "../../bindings/Cw20.types";
import { InstantiateMsg as VotingInstantiateMsg } from "../../bindings/DaoVotingCw20Staked.types";
import { InstantiateMsg as ProposalInitMsg } from "../../bindings/DaoProposalSingle.types";
import { InstantiateMsg as DaoInitMsg } from "../../bindings/DaoDaoCore.types";
import {
  InstantiateMsg as TrustWorthyInitMsg,
  Coin,
} from "../../bindings/ContractTradingTrustworthy.types";

export async function initToken(
  client: SigningCosmWasmClient,
  address: string,
  code: number
) {
  const initial_balances: Cw20Coin[] = [{ address, amount: "1000000000" }];
  const initMsg: InstantiateMsg = {
    name: "Test Token",
    symbol: "TTOKEN",
    decimals: 6,
    initial_balances,
    mint: {
      minter: address,
    },
  };

  const info = await client.instantiate(
    address,
    code,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initMsg,
    "Test Token 1.0",
    "auto",
    {
      admin: address,
    }
  );
  return info.contractAddress;
}

export async function initTrustWothyContract(
  client: SigningCosmWasmClient,
  address: string,
  code: number
) {
  const initMsg: TrustWorthyInitMsg = {
    provider_enroll_fee: {
      amount: "10",
      denom: "orai",
    } as Coin,
    denom: "orai",
    owner: "orai1lwuqpj9teef8j0rjy2l4c5ay9yddw26m03tlem",
    price_oracle:
      "orai19a5y29zj8qhvgew9e7vrgamzfjf63tpdrwr6545l568dd40q9c9s78fk36",
    max_cheating: 5,
    re_enroll_after: 60 * 60 * 24 * 7,  // after 7 days
  };

  const info = await client.instantiate(
    address,
    code,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initMsg,
    "Trading trustworthy proof",
    "auto",
    {
      admin: address,
    }
  );
  return info.contractAddress;
}

export async function initDao(
  client: SigningCosmWasmClient,
  address: string,
  code: {
    dao: number;
    cw20Base: number;
    staking: number;
    voting: number;
    proposal: number;
  }
) {
  const votingInstantiateMsg: VotingInstantiateMsg = {
    token_info: {
      new: {
        code_id: code.cw20Base,
        label: "DAO DAO governance token",
        name: "DAO",
        symbol: "DAO",
        decimals: 6,
        initial_balances: [{ amount: "100000000", address }],
        staking_code_id: code.staking,
      },
    },
    active_threshold: {
      absolute_count: {
        count: "100",
      },
    },
  };

  const proposalInstantiateMsg: ProposalInitMsg = {
    threshold: {
      threshold_quorum: {
        quorum: { percent: "0.015" },
        threshold: { majority: {} },
      },
    },
    max_voting_period: { time: 604800 }, // One week.
    only_members_execute: true,
    allow_revoting: false,
    pre_propose_info: {
      anyone_may_propose: {},
    },
    close_proposal_on_execution_failure: true,
  };

  const daoInitMsg: DaoInitMsg = {
    name: "DAO DAO",
    description: "A DAO that builds DAOs.",
    automatically_add_cw20s: true,
    automatically_add_cw721s: true,
    voting_module_instantiate_info: {
      code_id: code.voting,
      msg: toBinary(votingInstantiateMsg),
      admin: { core_module: {} },
      label: "voting module",
    },
    proposal_modules_instantiate_info: [
      {
        code_id: code.proposal,
        msg: toBinary(proposalInstantiateMsg),
        admin: { core_module: {} },
        label: "governance module",
      },
    ],
  };

  const info = await client.instantiate(
    address,
    code.dao,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    daoInitMsg,
    "Dao test",
    "auto"
  );
  return info.contractAddress;
}
