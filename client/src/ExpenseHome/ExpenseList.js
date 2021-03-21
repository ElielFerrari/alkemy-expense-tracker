import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseEditForm from './ExpenseEditForm';


function ExpenseList({ transaction, setTransaction }) {
    
  const [showForm, setShowForm] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  
  useEffect(() => {
    const getTransaction = () => {
      axios.get(`http://localhost:3001/transactions/`)
      .then((response) => setTransaction(response.data))
    }
  getTransaction()
  }, [])


  const deleteTransaction = (id) => axios.delete(`http://localhost:3001/delete/${id}`);

  return(
        <div className='transactions'>
          {transaction.map((val, key) => {
            return <div className='transaction-list' key={key} >
                    <div> Category: {val.category}</div>
                    <div> Description: {val.description} </div>
                    <div> Amount: ${val.amount} </div>
                    <div> Date: {val.date.slice(0, 10)} </div>
                    <div> Type: {val.type} </div>
                    <button  className='delete-button' onClick={() => {deleteTransaction(val.id); window.location.reload();}} > Delete</button>
                    <button onClick={() => {setIdEdit(val.id); if (val.id === idEdit) setShowForm(!showForm); }} > Edit </button>
                    <div style={{display: showForm && val.id === idEdit? 'block': 'none' }}>
                      <ExpenseEditForm editList={val}/>
                    </div>
                  </div>;
          })}
        </div>
    )
}

export default ExpenseList;