import React, { useEffect, useState } from "react";

import Caver from 'caver-js';
import contractJson from '../data/contract.json';

let klaytnAddress = contractJson.baobabContract;
if (contractJson.network === 'baobab') {
  klaytnAddress = contractJson.baobabContract;
} else if (contractJson.network === 'mainnet') {
  klaytnAddress = contractJson.cypressContract;
}
const klaytnABI = contractJson.contractABI;

export const TransactionContext = React.createContext();


export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const caver = new Caver(window.klaytn);
  const contract = new caver.contract.create(klaytnABI, klaytnAddress);

  const connectWallet = async () => {
      try {
        if (!window.klaytn) return alert("Please install KaiKas.");
  
        const accounts = await window.klaytn.enable();
  
        setCurrentAccount(accounts[0]);
        // window.location.reload();
      } catch (error) {
        console.log(error);
  
        throw new Error("No kaikas object");
      }
    };

    const order = async (event) => {
      const msg = event.target.getAttribute('data-msg');
      console.log("order is clicked ", currentAccount, msg);

      await caver.klay.sendTransaction({
          type: 'SMART_CONTRACT_EXECUTION',
          from: currentAccount,
          to: klaytnAddress,
          value: caver.utils.toPeb((1).toString(), 'KLAY'),
          data: contract.methods.order("cheese").encodeABI(),
          gas: '850000',
      }).then(() => {
          alert('Order success');
      })
          .catch(() => { alert('Order failed.'); });
  };

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        order,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
