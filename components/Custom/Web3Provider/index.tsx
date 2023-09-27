import { Web3ReactProvider } from '@web3-react/core';
import React, { ReactNode } from 'react';

import connectors from '@/utils/connectors';
/* import { getName } from '@/utils/connectors/getConnectorName'; */
/* function Child() {
  const { connector } = useWeb3React();
  console.log(`Priority Connector is: ${getName(connector)}`);
  return null;
} */
const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      {children}
      {/*   <Child /> */}
    </Web3ReactProvider>
  );
};

export default Web3Provider;
