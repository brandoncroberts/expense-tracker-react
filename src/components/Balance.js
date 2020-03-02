import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  console.log("Balance -> transactions", transactions);

  const amount = transactions.map(transaction => transaction.amount);

  const total = amount
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
    </>
  );
};
