/* import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { GnosisSafe } from '@web3-react/gnosis-safe';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import type { Connector } from '@web3-react/types';
import { WalletConnect as WalletConnect } from '@web3-react/walletconnect';
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask';
  if (connector instanceof WalletConnectV2) return 'WalletConnect V2';
  if (connector instanceof WalletConnect) return 'WalletConnect';
  if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet';
  if (connector instanceof Network) return 'Network';
  if (connector instanceof GnosisSafe) return 'Gnosis Safe';
  return 'Unknown';
} */

export const convertHex = (color: string, opacity: number) => {
  const hexColorToRGBA = `
      ${parseInt(color.substring(1, 3), 16)},
      ${parseInt(color.substring(3, 5), 16)},
      ${parseInt(color.substring(5, 7), 16)}, ${opacity}`;

  return `rgba(${hexColorToRGBA})`;
};

// https://gist.github.com/nmsdvid/8807205
export const debounce = (callback: any, delay = 250) => {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};

// https://jsfiddle.net/jonathansampson/m7G64/
export const throttle = (callback: any, limit = 250) => {
  let wait = false; // Initially, we're not waiting
  return () => {
    // We return a throttled function
    if (!wait) {
      // If we're not waiting
      callback.call(); // Execute users function
      wait = true; // Prevent future invocations
      setTimeout(() => {
        // After a period of time
        wait = false; // And allow future invocations
      }, limit);
    }
  };
};
