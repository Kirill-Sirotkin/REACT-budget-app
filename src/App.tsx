import React, { useState } from 'react';

import './App.css';
import Income from './components/Income';
import Expense from './components/Expense';
import Savings from './components/Savings';
import Transfer from './components/Transfer';
import { CashFlowData } from './types/Types';

function App() {
  const [incomes, setIncomes] = useState<CashFlowData[]>([]);
  const [expenses, setExpenses] = useState<CashFlowData[]>([]);

  return (
    <div className='App'>
      <div className='ui-grid'>
        <Income onSubmit={ (data: CashFlowData) => setIncomes([...incomes, data]) } cashFlows={incomes} />
        <Expense onSubmit={ (data: CashFlowData) => setExpenses([...expenses, data]) } cashFlows={expenses} />
        <Savings />
        <Transfer />
      </div>
    </div>
  );
}

export default App;
