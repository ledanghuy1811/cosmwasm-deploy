export type Uint128 = string;
export interface InstantiateMsg {
  amount_provider_to_pay: Coin;
  denom: string;
  oracle_address: string;
  owner: string;
  signal_providers?: string[] | null;
}
export interface Coin {
  amount: Uint128;
  denom: string;
}
export type ExecuteMsg = {
  send_public_signal: {
    signal: PublicSignal;
  };
} | {
  send_private_signal: {
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
    signal_hash: string;
    user_public_key: string;
  };
} | {
  send_signal_encrypted_to_user: {
    encrypted_signal: string;
    user: string;
  };
} | {
  claim_fee_from_provider: {
    provider: string;
    signal_hash: string;
  };
} | {
  change_oracle_address: {
    new_oracle: string;
  };
};
export interface PublicSignal {
  action: string;
  entry_price: Uint128;
  entry_time: string;
  stop_loss: Uint128;
  take_profit: Uint128;
  token: string;
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
} | {
  request_encrypted_info: {
    provider: string;
    signal_hash: string;
  };
} | {
  token_price_info: {
    signal_hash: string;
  };
};
export interface ConfigResponse {
  amount_provider_to_pay: Coin;
  oracle_address: string;
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
export type Timestamp = Uint64;
export type Uint64 = string;
export interface RequestEncryptedUserResponse {
  provider: string;
  request_info: RequestEncryptedInfo[];
  signal_hash: string;
}
export interface RequestEncryptedInfo {
  fee: Coin;
  time: Timestamp;
  user: string;
}
export interface TemporaryPrivateSignalsResponse {
  provider: string;
  temporary_private_signals: string[];
}
export interface TokenPriceInfoResponse {
  price_info: PriceInfo[];
  signal_hash: string;
}
export interface PriceInfo {
  price: Uint128;
  token: string;
}
export interface UserReceivedSignalsResponse {
  encrypted_signals: string[];
}