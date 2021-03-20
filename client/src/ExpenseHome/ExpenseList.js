import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseEditForm from './ExpenseEditForm';

function ExpenseList({ transaction, setTransaction }) {
    
    const [showForm, setShowForm] = useState(false);
    
    const getTransaction = () => {
    axios.get("http://localhost:3001/transactions/")
    .then((response) => setTransaction(response.data))
    };

    useEffect(() => {
      getTransaction();
    });
      

    const deleteTransaction = (id) => axios.delete(`http://localhost:3001/delete/${id}`)

    return(
        <div className='transactions'>
          {transaction.map((val, key) => {
            return <div className='transaction' key={key}>
                    <h3> Category: {val.category}</h3>
                    <h3> Description: {val.description} </h3>
                    <h3> Amount: ${val.amount} </h3>
                    <h3> Date: {val.date.slice(0, 10)} </h3>
                    <h3> Type: {val.type} </h3>
                    <button onClick={() => deleteTransaction(val.id)} > Delete</button>
                    <button onClick={() => setShowForm(!showForm)}> Edit </button>
                    <div style={{display: showForm? 'block ': 'none' }}><ExpenseEditForm editList={val}/> </div>
                  </div>;
          })}
        </div>
    )
}

export default ExpenseList;