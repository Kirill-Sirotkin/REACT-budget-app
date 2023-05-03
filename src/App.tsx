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
  const [balance, setBalance] = useState(0);
  const [savings, setSavings] = useState(0);

  const addIncome = (data: CashFlowData) => {
    if (!updateBalance(data.amount)) return;
    setIncomes([...incomes, data]);
  }

  const addExpense = (data: CashFlowData) => {
    if (!updateBalance(-data.amount)) return;
    setExpenses([...expenses, data]);
  }

  const transferToSavings = (amount: number) => {
    if (!updateBalance(-amount)) return;
    setSavings(savings + amount);
  }

  const updateBalance = (amount: number): boolean => {
    if (balance + amount < 0) return false;
    setBalance(balance + amount);
    return true;
  }

  return (
    <div className='App'>
      <div className='ui-grid'>
        <Income onSubmit={ (data: CashFlowData) => addIncome(data) } cashFlows={incomes} />
        <Expense onSubmit={ (data: CashFlowData) => addExpense(data) } cashFlows={expenses} />
        <Savings savings={savings} />
        <Transfer onSubmit={ (amount: number) => transferToSavings(amount) } balance={balance} />
      </div>
    </div>
  );
}

export default App;
