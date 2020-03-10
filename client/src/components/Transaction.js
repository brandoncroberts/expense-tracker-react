import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign =
    transaction.amount < 0
      ? { sign: "-", class: "minus" }
      : { sign: "+", class: "plus" };

  return (
    <li className={sign.class}>
      {transaction.text}
      <span>
        {sign.sign}${Math.abs(transaction.amount).toLocaleString()}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(transaction._id);
        }}
      >
        x
      </button>
    </li>
  );
};
