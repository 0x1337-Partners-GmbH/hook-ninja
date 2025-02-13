import { createConfig, http } from 'wagmi';
import {
  mainnet,
  optimism,
  sepolia,
  unichain,
  unichainSepolia,
} from 'wagmi/chains';

// https://blog.uniswap.org/uniswap-v4-is-here
// networks: Ethereum, Polygon, Arbitrum, OP Mainnet, Base, BNB Chain, Blast, World Chain, Avalanche, and Zora Network

export const config = createConfig({
  chains: [
    mainnet,
    optimism,
    sepolia,
    unichain,
    unichainSepolia,
  ],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [sepolia.id]: http(),
    [unichain.id]: http(),
    [unichainSepolia.id]: http(),
  },
});
