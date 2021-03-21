import React, { useState } from 'react';
import axios from 'axios';
import './Expense.css';

function ExpenseForm ({ amount, setAmount }) {

    const [desc, setDesc] = useState(null);
    const [date, setDate] = useState(null);
    const [type, setType] = useState(null);
    const [category, setCategory] = useState(null);

    const addTransaction = () => {
        axios.post("http://localhost:3001/create", {
          desc,
          category,
          amount,
          date,
          type
        }).then(()=>  console.log('Success'));
      };


    return(
        <div className='div-form'>
        <form className='form' autoComplete="off">
        <h3>Add New Transaction</h3>
            <input placeholder='Category'type="text" onChange={e => {setCategory(e.target.value)}} required />
            <input placeholder='Description'type="text"  onChange={e => {setDesc(e.target.value)}} required/>
            <input placeholder='Amount' type="number" onChange={e => {setAmount(e.target.value)}} required/>
            <select  name="type" onChange={e => {setType(e.target.value)}} required>
                <option value="" >Type of Transaction </option>
                <option value="Expense" >Expense </option>
                <option value="Deposit">Deposit </option>
            </select>
            <input type="date" onChange={e => {setDate(e.target.value)}} required />

            <button type='submit' onClick={ addTransaction }>Add Transaction</button>
        </form>
            
        </div>
    )
};

export default ExpenseForm;