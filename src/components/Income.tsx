import React from "react";

import { useInput } from "../hooks/hooks";
import { CashFlowData, CashFlowProps } from "../types/Types"
import CashFlowsList from "./CashFlowsList";

const Income = (props: CashFlowProps) => {
    const sourceInput = useInput();
    const amountInput = useInput();
    const dateInput = useInput();

    const submitIncomeForm = (e: React.FormEvent) => {
        e.preventDefault();

        const inputData: CashFlowData = { 
            source: sourceInput.value, 
            amount: parseInt(amountInput.value), 
            date: dateInput.value 
        }

        props.onSubmit(inputData);
    }

    return (
        <div className="grid-income grid-item">
            <form onSubmit={(e) => submitIncomeForm(e)}>
                <div className="input-wrapper">
                    <label htmlFor="incomeSource">Income source</label>
                    <input 
                    type="text" 
                    name="incomeSource" 
                    id="incomeSource" 
                    placeholder="Salary" 
                    {...sourceInput}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="incomeAmount">Income amount</label>
                    <input 
                    type="number" 
                    name="incomeAmount" 
                    id="incomeAmount" 
                    {...amountInput}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="incomeDate">Date</label>
                    <input 
                    type="date" 
                    name="incomeDate" 
                    id="incomeDate" 
                    {...dateInput}
                    />
                </div>
                <div className="input-wrapper">
                    <button type="submit" name="incomeSubmit" id="incomeSubmit">Add income</button>
                </div>
            </form>
            <div className="cash-flow-list">
                <CashFlowsList onSubmit={()=>{}} cashFlows={props.cashFlows} />
            </div>
        </div>
    )
}

export default Income;