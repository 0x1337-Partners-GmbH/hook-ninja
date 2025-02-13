import { decodeHookPermissions } from './uniswap';

describe('decodePermissions', () => {
  it('should correctly decode permissions from the example address', () => {
    // https://github.com/Uniswap/v4-core/blob/main/src/libraries/Hooks.sol#L14
    const exampleAddress =
      '0x0000000000000000000000000000000000002400';
    const permissions =
      decodeHookPermissions(exampleAddress);

    // 0x2400 = 9216 in decimal
    // In binary: 0010 0100 0000 0000
    // has the lowest bits '10 0100 0000 0000' which would cause the 'before initialize' and 'after add liquidity' hooks to be used.
    expect(permissions).toEqual({
      BEFORE_INITIALIZE: true,
      AFTER_INITIALIZE: false,
      BEFORE_ADD_LIQUIDITY: false,
      AFTER_ADD_LIQUIDITY: true,
      BEFORE_REMOVE_LIQUIDITY: false,
      AFTER_REMOVE_LIQUIDITY: false,
      BEFORE_SWAP: false,
      AFTER_SWAP: false,
      BEFORE_DONATE: false,
      AFTER_DONATE: false,
      BEFORE_SWAP_RETURNS_DELTA: false,
      AFTER_SWAP_RETURNS_DELTA: false,
      AFTER_ADD_LIQUIDITY_RETURNS_DELTA: false,
      AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA: false,
    });
  });
});
