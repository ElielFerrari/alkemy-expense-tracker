import React, { useState } from 'react';
import Axios from 'axios';

function ExpenseForm () {

    const [desc, setDesc] = useState(null);
    const [amount, setAmount] = useState(null);
    const [date, setDate] = useState(null);
    const [type, setType] = useState(null);
    const [category, setCategory] = useState(null);

    const addTransaction = () => {
        Axios.post("http://localhost:3001/create", {
          desc,
          category,
          amount,
          date,
          type
        }).then(()=>  console.log('Success'));
      };


    return(
        <form autoComplete="off">
            <label >Category:</label>
            <input type="text" onChange={e => {setCategory(e.target.value)}} required />
            <label >Description:</label>
            <input type="text"  onChange={e => {setDesc(e.target.value)}} required/>
            <label >Amount:</label>
            <input type="number" onChange={e => {setAmount(e.target.value)}} required/>
            <label >Type of Transaction:</label>
            <input list="type" name="type" onChange={e => {setType(e.target.value)}} required></input>
            <datalist id="type">
                <option value="expense" />
                <option value="deposit" />
            </datalist>
            <label >Date:</label>
            <input type="date" onChange={e => {setDate(e.target.value)}} required />

            <button type='submit' onClick={ addTransaction } >Add Transaction</button>
        </form>
    )
};

export default ExpenseForm;