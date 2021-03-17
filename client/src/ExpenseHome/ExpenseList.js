import React, { useEffect } from 'react';
import axios from 'axios';

function ExpenseList({ transaction, setTransaction }) {
    
    const getTransaction = () => {
    axios.get("http://localhost:3001/transactions/")
    .then((response) => setTransaction(response.data))
    .then()
    }

    useEffect(() => {
      getTransaction();
    });

    const deleteTransaction = (id) => axios.delete(`http://localhost:3001/delete/${id}`)
    

    return(
        <div className='categories'>
           <input list="category" name="category" onChange={() => {getTransaction()}} ></input>
            <datalist id="category">
                <option value='server' />
            </datalist>      
          {transaction.map((val, key) => {
            return <div className='transaction' key={key}>
                    <h3> Category: {val.category}</h3>
                    <h3> Description: {val.description} </h3>
                    <h3> Amount: ${val.amount} </h3>
                    <h3> Date: {val.date} </h3>
                    <h3> Type: {val.type} </h3>
                    <button onClick={() => deleteTransaction(val.id)} > Delete</button>
                  </div>;
          })}
        </div>
    )
}

export default ExpenseList;