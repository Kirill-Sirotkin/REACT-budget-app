import React, { useState } from "react";

import { SavingsProps } from "../types/Types";
import { useInput } from "../hooks/Hooks";

const Savings = (props: SavingsProps) => {
    const [targetSavings, setTargetSavings] = useState(0);
    let target = useInput();

    return (
        <div className="grid-savings grid-item">
            <form onSubmit={(e) => {e.preventDefault(); setTargetSavings(parseInt(target.value))}}>
                <div className="input-wrapper">
                    <label htmlFor="savingsTarget">Savings target</label>
                    <input 
                    type="number" 
                    name="savingsTarget" 
                    id="savingsTarget"
                    {...target}
                    ></input>
                </div>
                <div className="input-wrapper">
                    <button type="submit" name="savingsSubmit" id="savingsSubmit">Set / reset</button>
                </div>
            </form>
            <div className="savings-info-wrapper">
                <p>Current savings: {props.savings}$</p>
                <p>Target: {targetSavings}$</p>
                <p>Progress: {props.savings/targetSavings*100}%</p>
                <progress value={props.savings} max={targetSavings}></progress>
            </div>
        </div>
    )
}

export default Savings;