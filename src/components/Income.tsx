import React from "react";
import { useInput } from "../hooks/Hooks";

const Income = () => {
    const sourceInput = useInput();
    const amountInput = useInput();
    const dateInput = useInput();

    const printForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("source: ", sourceInput.value);
        console.log("amount: ", parseInt(amountInput.value));
        console.log("date: ", dateInput.value);
    }

    return (
        <div className="grid-income grid-item">
            <form onSubmit={(e) => printForm(e)}>
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
        </div>
    )
}

export default Income;