import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransation } from "./components/AddTransation";
function App() {
  return (
    <div className="">
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransation />
      </div>
    </div>
  );
}

export default App;
