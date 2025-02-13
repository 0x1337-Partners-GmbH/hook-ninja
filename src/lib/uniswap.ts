export interface HookPermissions {
  BEFORE_INITIALIZE: boolean;
  AFTER_INITIALIZE: boolean;
  BEFORE_ADD_LIQUIDITY: boolean;
  AFTER_ADD_LIQUIDITY: boolean;
  BEFORE_REMOVE_LIQUIDITY: boolean;
  AFTER_REMOVE_LIQUIDITY: boolean;
  BEFORE_SWAP: boolean;
  AFTER_SWAP: boolean;
  BEFORE_DONATE: boolean;
  AFTER_DONATE: boolean;
  BEFORE_SWAP_RETURNS_DELTA: boolean;
  AFTER_SWAP_RETURNS_DELTA: boolean;
  AFTER_ADD_LIQUIDITY_RETURNS_DELTA: boolean;
  AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA: boolean;
}

export const decodeHookPermissions = (
  address: string
): HookPermissions => {
  const flags = {
    BEFORE_INITIALIZE: 1 << 13,
    AFTER_INITIALIZE: 1 << 12,

    BEFORE_ADD_LIQUIDITY: 1 << 11,
    AFTER_ADD_LIQUIDITY: 1 << 10,

    BEFORE_REMOVE_LIQUIDITY: 1 << 9,
    AFTER_REMOVE_LIQUIDITY: 1 << 8,

    BEFORE_SWAP: 1 << 7,
    AFTER_SWAP: 1 << 6,

    BEFORE_DONATE: 1 << 5,
    AFTER_DONATE: 1 << 4,

    BEFORE_SWAP_RETURNS_DELTA: 1 << 3,
    AFTER_SWAP_RETURNS_DELTA: 1 << 2,
    AFTER_ADD_LIQUIDITY_RETURNS_DELTA: 1 << 1,
    AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA: 1 << 0,
  };

  const addressInt = BigInt(address);

  const permissions: HookPermissions = {
    BEFORE_INITIALIZE:
      (addressInt & BigInt(flags.BEFORE_INITIALIZE)) !==
      BigInt(0),
    AFTER_INITIALIZE:
      (addressInt & BigInt(flags.AFTER_INITIALIZE)) !==
      BigInt(0),
    BEFORE_ADD_LIQUIDITY:
      (addressInt & BigInt(flags.BEFORE_ADD_LIQUIDITY)) !==
      BigInt(0),
    AFTER_ADD_LIQUIDITY:
      (addressInt & BigInt(flags.AFTER_ADD_LIQUIDITY)) !==
      BigInt(0),
    BEFORE_REMOVE_LIQUIDITY:
      (addressInt &
        BigInt(flags.BEFORE_REMOVE_LIQUIDITY)) !==
      BigInt(0),
    AFTER_REMOVE_LIQUIDITY:
      (addressInt &
        BigInt(flags.AFTER_REMOVE_LIQUIDITY)) !==
      BigInt(0),
    BEFORE_SWAP:
      (addressInt & BigInt(flags.BEFORE_SWAP)) !==
      BigInt(0),
    AFTER_SWAP:
      (addressInt & BigInt(flags.AFTER_SWAP)) !== BigInt(0),
    BEFORE_DONATE:
      (addressInt & BigInt(flags.BEFORE_DONATE)) !==
      BigInt(0),
    AFTER_DONATE:
      (addressInt & BigInt(flags.AFTER_DONATE)) !==
      BigInt(0),
    BEFORE_SWAP_RETURNS_DELTA:
      (addressInt &
        BigInt(flags.BEFORE_SWAP_RETURNS_DELTA)) !==
      BigInt(0),
    AFTER_SWAP_RETURNS_DELTA:
      (addressInt &
        BigInt(flags.AFTER_SWAP_RETURNS_DELTA)) !==
      BigInt(0),
    AFTER_ADD_LIQUIDITY_RETURNS_DELTA:
      (addressInt &
        BigInt(flags.AFTER_ADD_LIQUIDITY_RETURNS_DELTA)) !==
      BigInt(0),
    AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA:
      (addressInt &
        BigInt(
          flags.AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA
        )) !==
      BigInt(0),
  };

  return permissions;
};
