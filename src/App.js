import React from "react";
import Header from "./component/header"
import IncomeExpense from "./component/incomeExpense";
import { Balance } from "./component/balance.js";
import { TransctionList } from "./component/TransctionList.js";
import './App.css';
import { AddTranction } from "./component/AddTranction";
import { GlobalContext } from "./global/globalState";
import { AppReducer } from "./global/AppReducer";


function App() {
  return (
    <GlobalContext.Provider>
       <Header/>
       <div className="container">
       <Balance/>
       <IncomeExpense />
       <TransctionList />
       <AddTranction />
       </div>

    </GlobalContext.Provider>
  );
}

export default App;
