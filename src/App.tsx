import React from 'react';
import './App.css';
import Income from './components/Income';
import Expense from './components/Expense';
import Savings from './components/Savings';
import Transfer from './components/Transfer';

function App() {
  return (
    <div className='App'>
      <div className='ui-grid'>
        <Income></Income>
        <Expense></Expense>
        <Savings></Savings>
        <Transfer></Transfer>
      </div>
    </div>
  );
}

export default App;
