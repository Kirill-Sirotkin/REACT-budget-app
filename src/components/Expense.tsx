import React from "react";

import { CashFlowData, CashFlowProps } from "../types/Types";
import { useInput } from "../hooks/Hooks";
import CashFlowsList from "./CashFlowsList";

const Expense = (props: CashFlowProps) => {
    const sourceInput = useInput();
    const amountInput = useInput();
    const dateInput = useInput();

    const submitExpenseForm = (e: React.FormEvent) => {
        e.preventDefault();

        const inputData: CashFlowData = { 
            source: sourceInput.value, 
            amount: parseInt(amountInput.value), 
            date: dateInput.value 
        }

        props.onSubmit(inputData);
    }

    return (
        <div className="grid-expense grid-item">
            <form onSubmit={(e) => submitExpenseForm(e)}>
                <div className="input-wrapper">
                    <label htmlFor="expenseSource">Expense source</label>
                    <input 
                    type="text" 
                    name="expenseSource" 
                    id="expenseSource" 
                    placeholder="Electricity bill"
                    {...sourceInput}
                    ></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="expenseAmount">Expense amount</label>
                    <input 
                    type="number" 
                    name="expenseAmount" 
                    id="expenseAmount"
                    {...amountInput}
                    ></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="expenseDate">Date</label>
                    <input 
                    type="date" 
                    name="expenseDate" 
                    id="expenseDate"
                    {...dateInput}
                    ></input>
                </div>
                <div className="input-wrapper">
                    <button type="submit" name="expenseSubmit" id="expenseSubmit">Add expense</button>
                </div>
            </form>
            <CashFlowsList onSubmit={()=>{}} cashFlows={props.cashFlows} />
        </div>
    )
}

export default Expense;