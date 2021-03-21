import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './ExpenseHome/Header';
import ExpenseForm from './ExpenseHome/ExpenseForm';
import ExpenseList from './ExpenseHome/ExpenseList';


function App() {

  const [amount, setAmount] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].type === 'Expense') {
          temp -= transaction[i].amount; 
      } else {
          temp += transaction[i].amount;
      }
    setTotalAmount(temp);
  }}, [transaction]);

  return (
    <div className="App">
     <Header totalAmount={totalAmount}/>
     <ExpenseForm className='expense-form'amount={amount} setAmount={setAmount} />
     <ExpenseList transaction={transaction} setTransaction={setTransaction} />
    </div>
  )
}

export default App;
