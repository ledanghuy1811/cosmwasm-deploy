export type Uint128 = string;
export interface InstantiateMsg {
  denom: string;
  max_cheating: number;
  owner: string;
  price_oracle: string;
  provider_enroll_fee: Coin;
  re_enroll_after: number;
}
export interface Coin {
  amount: Uint128;
  denom: string;
}
export type ExecuteMsg = {
  register_to_be_provider: {
    avatar?: string | null;
    banner?: string | null;
    description: string;
    fee: Coin;
    name: string;
  };
} | {
  send_private_signal: {
    signal_hash: string;
    token: string;
  };
} | {
  send_public_signal: {
    signal: PublicSignal;
    signal_hash: string;
  };
} | {
  request_signal_from_provider: {
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
  change_owner: {
    new_owner: string;
  };
} | {
  change_fee_provider: {
    new_fee: Coin;
  };
} | {
  set_provider_signal_fee: {
    fee: Coin;
  };
} | {
  change_price_oracle: {
    new_price_oracle: string;
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
  temporary_signal_info: {
    provider: string;
  };
} | {
  request_encrypted_info: {
    provider: string;
    signal_hash: string;
  };
} | {
  provider_info: {
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
  temp_signal_with_request: {
    provider?: string | null;
  };
} | {
  all_user_receive_signal: {
    user: string;
  };
};
export type ArrayOfAllUserReceiveSignalsResponse = AllUserReceiveSignalsResponse[];
export interface AllUserReceiveSignalsResponse {
  encrypt_signal: string;
  provider: string;
  time: number;
}
export interface ConfigResponse {
  max_cheating: number;
  owner: string;
  price_oracle: string;
  provider_enroll_fee: Coin;
  re_enroll_after: number;
  signal_providers: string[];
}
export interface LatestUserReceivedSignalResponse {
  latest_encrypted_signal: UserReceiveSignal;
  provider: string;
}
export interface UserReceiveSignal {
  encrypt_signal: string;
  time: number;
}
export type Addr = string;
export interface ProviderInfoResponse {
  provider: ProviderInfo;
}
export interface ProviderInfo {
  address: Addr;
  avatar?: string | null;
  banner?: string | null;
  cheating: number;
  claimed_fee: Coin;
  description: string;
  fee: Coin;
  hold_fee: Coin;
  name: string;
  total_request: number;
}
export interface PublicSignalResponse {
  provider: string;
  signals: PublicSignalInfo[];
}
export interface PublicSignalInfo {
  hash: string;
  signal: PublicSignal;
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
export interface TempSignalWithRequestResponse {
  infos: TempSignalRequestInfo[];
}
export interface TempSignalRequestInfo {
  fee: Coin;
  provider: string;
  request_info: RequestEncryptedInfo[];
  signal: TemporaryPrivateSignalInfo;
}
export interface TemporaryPrivateSignalInfo {
  hash: string;
  price: PriceInfo[];
  time: number;
  token: string;
}
export interface PriceInfo {
  price: Uint128;
  token: string;
}
export interface TemporarySignalInfoResponse {
  provider: string;
  signal_info: TemporaryPrivateSignalInfo[];
}
export interface UserReceivedSignalsResponse {
  encrypted_signals: UserReceiveSignal[];
  provider: string;
}