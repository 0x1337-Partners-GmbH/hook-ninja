// maybe try to use https://viem.sh/docs/utilities/extractChain instead

interface Chain {
  name: string;
  geckoTerminalSlug: string | null;
}

export const CHAINS: Record<number, Chain> = {
  1: {
    name: 'Ethereum',
    geckoTerminalSlug: 'eth',
  },
  10: {
    name: 'Optimism',
    geckoTerminalSlug: 'optimism',
  },
  130: {
    name: 'Unichain',
    geckoTerminalSlug: 'unichain',
  },
  8453: {
    name: 'Base',
    geckoTerminalSlug: 'base',
  },
  1301: {
    name: 'Unichain Sepolia',
    geckoTerminalSlug: null,
  },
  42161: {
    name: 'Arbitrum',
    geckoTerminalSlug: 'arbitrum',
  },
};

export const getChain = (chainId: number) => {
  if (!CHAINS[chainId]) {
    return null;
  }

  return CHAINS[chainId];
};
