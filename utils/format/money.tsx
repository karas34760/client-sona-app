import Web3 from 'web3';
export const usdToWei = (amountUSD: number) => {
  const web3 = new Web3(window.ethereum);
  const amountWei = web3.utils.toWei(amountUSD.toString(), 'ether');
  return web3.utils.toBN(amountWei);
};
export const weiToUSD = (amountWei: string, exchangeRate: number): string => {
  const web3 = new Web3();

  // Convert wei to USDT (considering 6 decimal places)
  const amountUSDT: number = parseFloat(web3.utils.fromWei(amountWei, 'ether'));

  // Convert USDT to USD
  const amountUSD: number = amountUSDT * exchangeRate;

  return amountUSD.toString();
};

export const checkIsNumber = (query: string) => query.match(/^[0-9]+$/);
