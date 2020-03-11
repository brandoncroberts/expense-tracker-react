import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = parseInt(
    amounts
      .filter(amount => amount > 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2)
  );

  const expense = parseInt(
    amounts
      .filter(amount => amount < 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2) * -1
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income.toLocaleString()}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${expense.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
