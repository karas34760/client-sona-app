import Web3 from 'web3';
export const usdToWei = (amountUSD: number) => {
  const web3 = new Web3(window.ethereum);
  const amountWei = web3.utils.toWei(amountUSD.toString(), 'ether');
  return web3.utils.toBN(amountWei);
};
