import React from "react";
import Header from "./component/header"
import IncomeExpense from "./component/incomeExpense";
import { Balance } from "./component/balance.js";
import { TransctionList } from "./component/TransctionList.js";
import './App.css';
import { AddTranction } from "./component/AddTranction";

function App() {
  return (
    <div>
       <Header/>
       <div className="container">
       <Balance/>
       <IncomeExpense />
       <TransctionList />
       <AddTranction />
       </div>

    </div>
  );
}

export default App;
