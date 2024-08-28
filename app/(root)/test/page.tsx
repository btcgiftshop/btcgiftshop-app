import React from 'react'
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { BitcoinWalletConnectors } from "@dynamic-labs/bitcoin";



const page = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '71d06823-cdcb-457c-98e0-ed06c59f9e95',
        walletConnectors: [BitcoinWalletConnectors]
      }}>
      <DynamicWidget />
    </DynamicContextProvider>
    // <DynamicContextProvider
    //   settings={{
    //     environmentId: '71d06823-cdcb-457c-98e0-ed06c59f9e95',
    //     // walletConnectors: [EthereumWalletConnectors],
    //   }}>
    //   <DynamicWidget />
    // </DynamicContextProvider>
  )
}

export default page