/* eslint-disable no-unused-vars */

declare global {
  interface Window {
    ethereum: import('ethers').providers.ExternalProvider;
  }
}
type InjectedProviders = {
  isMetaMask?: true;
};
/* interface Window {
  ethereum: InjectedProviders & {
    on: (...args: any[]) => void;
    removeListener: (...args: any[]) => void;
    removeAllListeners: (...args: any[]) => void;
    request<T = any>(args: any): Promise<T>;
  };
} */
interface Window {
  ethereum: any;
}
