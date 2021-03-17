import React from 'react';
import './App.css';
import Header from './ExpenseHome/Header';
import ExpenseForm from './ExpenseHome/ExpenseForm';
import ExpenseList from './ExpenseHome/ExpenseList';

function App() {

  return (
    <div className="App">
     <Header />
     <ExpenseForm />
     <ExpenseList />
    </div>
  );
}

export default App;
