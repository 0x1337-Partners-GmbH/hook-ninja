export interface HookPermissions {
  BEFORE_INITIALIZE_FLAG: boolean;
  AFTER_INITIALIZE_FLAG: boolean;
  BEFORE_ADD_LIQUIDITY_FLAG: boolean;
  AFTER_ADD_LIQUIDITY_FLAG: boolean;
  BEFORE_REMOVE_LIQUIDITY_FLAG: boolean;
  AFTER_REMOVE_LIQUIDITY_FLAG: boolean;
  BEFORE_SWAP_FLAG: boolean;
  AFTER_SWAP_FLAG: boolean;
  BEFORE_DONATE_FLAG: boolean;
  AFTER_DONATE_FLAG: boolean;
  BEFORE_SWAP_RETURNS_DELTA_FLAG: boolean;
  AFTER_SWAP_RETURNS_DELTA_FLAG: boolean;
  AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG: boolean;
  AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG: boolean;
}

export const decodeHookPermissions = (
  address: string
): HookPermissions => {
  const flags = {
    BEFORE_INITIALIZE_FLAG: 1 << 13,
    AFTER_INITIALIZE_FLAG: 1 << 12,

    BEFORE_ADD_LIQUIDITY_FLAG: 1 << 11,
    AFTER_ADD_LIQUIDITY_FLAG: 1 << 10,

    BEFORE_REMOVE_LIQUIDITY_FLAG: 1 << 9,
    AFTER_REMOVE_LIQUIDITY_FLAG: 1 << 8,

    BEFORE_SWAP_FLAG: 1 << 7,
    AFTER_SWAP_FLAG: 1 << 6,

    BEFORE_DONATE_FLAG: 1 << 5,
    AFTER_DONATE_FLAG: 1 << 4,

    BEFORE_SWAP_RETURNS_DELTA_FLAG: 1 << 3,
    AFTER_SWAP_RETURNS_DELTA_FLAG: 1 << 2,
    AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG: 1 << 1,
    AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG: 1 << 0,
  };

  const addressInt = BigInt(address);

  const permissions: HookPermissions = {
    BEFORE_INITIALIZE_FLAG:
      (addressInt &
        BigInt(flags.BEFORE_INITIALIZE_FLAG)) !==
      BigInt(0),
    AFTER_INITIALIZE_FLAG:
      (addressInt & BigInt(flags.AFTER_INITIALIZE_FLAG)) !==
      BigInt(0),
    BEFORE_ADD_LIQUIDITY_FLAG:
      (addressInt &
        BigInt(flags.BEFORE_ADD_LIQUIDITY_FLAG)) !==
      BigInt(0),
    AFTER_ADD_LIQUIDITY_FLAG:
      (addressInt &
        BigInt(flags.AFTER_ADD_LIQUIDITY_FLAG)) !==
      BigInt(0),
    BEFORE_REMOVE_LIQUIDITY_FLAG:
      (addressInt &
        BigInt(flags.BEFORE_REMOVE_LIQUIDITY_FLAG)) !==
      BigInt(0),
    AFTER_REMOVE_LIQUIDITY_FLAG:
      (addressInt &
        BigInt(flags.AFTER_REMOVE_LIQUIDITY_FLAG)) !==
      BigInt(0),
    BEFORE_SWAP_FLAG:
      (addressInt & BigInt(flags.BEFORE_SWAP_FLAG)) !==
      BigInt(0),
    AFTER_SWAP_FLAG:
      (addressInt & BigInt(flags.AFTER_SWAP_FLAG)) !==
      BigInt(0),
    BEFORE_DONATE_FLAG:
      (addressInt & BigInt(flags.BEFORE_DONATE_FLAG)) !==
      BigInt(0),
    AFTER_DONATE_FLAG:
      (addressInt & BigInt(flags.AFTER_DONATE_FLAG)) !==
      BigInt(0),
    BEFORE_SWAP_RETURNS_DELTA_FLAG:
      (addressInt &
        BigInt(flags.BEFORE_SWAP_RETURNS_DELTA_FLAG)) !==
      BigInt(0),
    AFTER_SWAP_RETURNS_DELTA_FLAG:
      (addressInt &
        BigInt(flags.AFTER_SWAP_RETURNS_DELTA_FLAG)) !==
      BigInt(0),
    AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG:
      (addressInt &
        BigInt(
          flags.AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG
        )) !==
      BigInt(0),
    AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG:
      (addressInt &
        BigInt(
          flags.AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG
        )) !==
      BigInt(0),
  };

  return permissions;
};
