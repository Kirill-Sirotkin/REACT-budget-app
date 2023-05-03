import React from "react";

import { BalanceProps } from "../types/Types";
import { useInput } from "../hooks/Hooks";

const Transfer = (props: BalanceProps) => {
    const balanceToSavings = useInput();

    const submitTransfer = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(parseInt(balanceToSavings.value));
    }

    return (
        <div className="grid-transfer grid-item">
            Current balance: {props.balance}$
            <form onSubmit={(e) => submitTransfer(e)}>
                <div className="input-wrapper center">
                    <label className="center" htmlFor="balanceToSavings">Transfer to savings account</label>
                    <input 
                    className="center" 
                    type="number" 
                    name="balanceToSavings" 
                    id="balanceToSavings" 
                    {...balanceToSavings}
                    ></input>
                </div>
                <div className="input-wrapper center">
                    <button className="center" type="submit" name="transferSubmit" id="transferSubmit">Transfer</button>
                </div>
            </form>
        </div>
    )
}

export default Transfer;