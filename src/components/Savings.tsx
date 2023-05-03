import React from "react";

const Savings = () => {
    return (
        <div className="grid-savings grid-item">
            <form>
                <div className="input-wrapper">
                    <label htmlFor="savingsTarget">Savings target</label>
                    <input type="number" name="savingsTarget" id="savingsTarget"></input>
                </div>
                <div className="input-wrapper">
                    <button type="submit" name="savingsSubmit" id="savingsSubmit">Set / reset</button>
                </div>
            </form>
        </div>
    )
}

export default Savings;