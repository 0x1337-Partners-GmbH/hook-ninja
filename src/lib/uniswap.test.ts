import { decodeHookPermissions } from './uniswap';

describe('decodePermissions', () => {
  it('should correctly decode permissions from the example address', () => {
    // https://github.com/Uniswap/v4-core/blob/main/src/libraries/Hooks.sol#L14
    const exampleAddress =
      '0x0000000000000000000000000000000000002400';
    const permissions =
      decodeHookPermissions(exampleAddress);

    console.log(permissions);

    // 0x2400 = 9216 in decimal
    // In binary: 0010 0100 0000 0000
    // has the lowest bits '10 0100 0000 0000' which would cause the 'before initialize' and 'after add liquidity' hooks to be used.
    expect(permissions).toEqual({
      BEFORE_INITIALIZE_FLAG: true,
      AFTER_INITIALIZE_FLAG: false,
      BEFORE_ADD_LIQUIDITY_FLAG: false,
      AFTER_ADD_LIQUIDITY_FLAG: true,
      BEFORE_REMOVE_LIQUIDITY_FLAG: false,
      AFTER_REMOVE_LIQUIDITY_FLAG: false,
      BEFORE_SWAP_FLAG: false,
      AFTER_SWAP_FLAG: false,
      BEFORE_DONATE_FLAG: false,
      AFTER_DONATE_FLAG: false,
      BEFORE_SWAP_RETURNS_DELTA_FLAG: false,
      AFTER_SWAP_RETURNS_DELTA_FLAG: false,
      AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG: false,
      AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG: false,
    });
  });
});
