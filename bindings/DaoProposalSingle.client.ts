/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Duration, PreProposeInfo, Threshold, CosmosMsgForEmpty, Uint64, Vote, Coin, Addr, ProposalCreationPolicy } from "./types";
import { Config, VoteResponse, InfoResponse, ProposalListResponse, ProposalResponse, VoteListResponse, HooksResponse } from "./DaoProposalSingle.types";
export interface DaoProposalSingleReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<Config>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ProposalListResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ProposalListResponse>;
    getVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<VoteListResponse>;
    proposalCount: () => Promise<Uint64>;
    proposalCreationPolicy: () => Promise<ProposalCreationPolicy>;
    proposalHooks: () => Promise<HooksResponse>;
    voteHooks: () => Promise<HooksResponse>;
    dao: () => Promise<Addr>;
    info: () => Promise<InfoResponse>;
    nextProposalId: () => Promise<Uint64>;
}
export declare class DaoProposalSingleQueryClient implements DaoProposalSingleReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<Config>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ProposalListResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ProposalListResponse>;
    getVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<VoteListResponse>;
    proposalCount: () => Promise<Uint64>;
    proposalCreationPolicy: () => Promise<ProposalCreationPolicy>;
    proposalHooks: () => Promise<HooksResponse>;
    voteHooks: () => Promise<HooksResponse>;
    dao: () => Promise<Addr>;
    info: () => Promise<InfoResponse>;
    nextProposalId: () => Promise<Uint64>;
}
export interface DaoProposalSingleInterface extends DaoProposalSingleReadOnlyInterface {
    contractAddress: string;
    sender: string;
    propose: ({ description, msgs, proposer, title }: {
        description: string;
        msgs: CosmosMsgForEmpty[];
        proposer?: string;
        title: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, rationale, vote }: {
        proposalId: number;
        rationale?: string;
        vote: Vote;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateRationale: ({ proposalId, rationale }: {
        proposalId: number;
        rationale?: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, threshold }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        threshold: Threshold;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updatePreProposeInfo: ({ info }: {
        info: PreProposeInfo;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addVoteHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeVoteHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class DaoProposalSingleClient extends DaoProposalSingleQueryClient implements DaoProposalSingleInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    propose: ({ description, msgs, proposer, title }: {
        description: string;
        msgs: CosmosMsgForEmpty[];
        proposer?: string;
        title: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, rationale, vote }: {
        proposalId: number;
        rationale?: string;
        vote: Vote;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateRationale: ({ proposalId, rationale }: {
        proposalId: number;
        rationale?: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, threshold }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        threshold: Threshold;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updatePreProposeInfo: ({ info }: {
        info: PreProposeInfo;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    addVoteHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    removeVoteHook: ({ address }: {
        address: string;
    }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}