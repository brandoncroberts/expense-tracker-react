import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const total = parseInt(
    amount
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2)
  );

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total.toLocaleString()}</h1>
    </>
  );
};
