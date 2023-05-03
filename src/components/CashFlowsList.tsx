import React from "react";

import { CashFlowProps } from "../types/Types";

const CashFlowsList = (props: CashFlowProps) => {
    return (
        <ul>
            { props.cashFlows.map(cf => {return <li>{cf.source}: {cf.amount}$ | {cf.date}</li>}) }
        </ul>
    )
}

export default CashFlowsList;