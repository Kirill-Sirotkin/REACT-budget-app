import React from "react";

const Expense = () => {
    return (
        <div className="grid-expense grid-item">
            <form>
                <div className="input-wrapper">
                    <label htmlFor="expenseSource">Expense source</label>
                    <input type="text" name="expenseSource" id="expenseSource" placeholder="Electricity bill"></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="expenseAmount">Expense amount</label>
                    <input type="number" name="expenseAmount" id="expenseAmount"></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="expenseDate">Date</label>
                    <input type="date" name="expenseDate" id="expenseDate"></input>
                </div>
                <div className="input-wrapper">
                    <button type="submit" name="expenseSubmit" id="expenseSubmit">Add expense</button>
                </div>
            </form>
        </div>
    )
}

export default Expense;