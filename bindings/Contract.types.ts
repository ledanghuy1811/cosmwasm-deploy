export type Uint128 = string;
export interface InstantiateMsg {
  amount_provider_to_pay: Coin;
  denom: string;
  owner: string;
  signal_providers?: string[] | null;
}
export interface Coin {
  amount: Uint128;
  denom: string;
}
export type ExecuteMsg = {
  send_public_signal: {
    provider: string;
    signal: PublicSignal;
  };
} | {
  send_private_signal: {
    provider: string;
    signal_hash: string;
  };
} | {
  register_to_be_provider: {};
} | {
  change_owner: {
    new_owner: string;
  };
} | {
  change_fee_provider: {
    new_fee: Coin;
  };
} | {
  add_or_remove_provider: {
    change_state: boolean;
    providers: string[];
  };
} | {
  set_provider_signal_fee: {
    fee: Coin;
  };
} | {
  request_latest_signal_from_provider: {
    provider: string;
    user_public_key: string;
  };
} | {
  send_signal_encrypted_to_user: {
    encrypted_signal: string;
    user: string;
  };
};
export interface PublicSignal {
  entry_price: Uint128;
  entry_time: string;
  signal_type: string;
  token_type: string;
}
export type QueryMsg = {
  config: {};
} | {
  public_signal: {
    provider: string;
  };
} | {
  private_signal: {
    provider: string;
  };
} | {
  provider_signal_fee: {
    provider: string;
  };
} | {
  user_received_signals: {
    provider: string;
    user: string;
  };
} | {
  latest_user_received_signal: {
    provider: string;
    user: string;
  };
} | {
  temporary_private_signals: {
    provider: string;
  };
};
export interface ConfigResponse {
  amount_provider_to_pay: Coin;
  owner: string;
  signal_providers: string[];
}
export interface LatestUserReceivedSignalResponse {
  latest_encrypted_signal: string;
}
export interface PrivateSignalResponse {
  provider: string;
  signals: string[];
}
export interface ProviderSignalFeeResponse {
  fee: Coin;
}
export interface PublicSignalResponse {
  provider: string;
  signals: PublicSignal[];
}
export interface TemporaryPrivateSignalsResponse {
  provider: string;
  temporary_private_signals: string[];
}
export interface UserReceivedSignalsResponse {
  encrypted_signals: string[];
}