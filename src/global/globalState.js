import React, {creatContex , useReducer } from "react";
import AppReducer from "./AppReducer"

const initialState = {
transction:  [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
]}
//creata contex
export const GlobalContext = creatContex(initialState)

// Provider component

export const GlobalProvider = ( { children } ) => {

    const [state, dispatch] = useReducer( AppReducer, initialState )
    return(
        <GlobalContext.Provider value= {{
            transction: state.transction
        }}>
            {Children}
        </GlobalContext.Provider>)
}

