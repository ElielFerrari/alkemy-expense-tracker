import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList() {

    const [transaction, setTransaction] = useState([]);
    
    const getTransaction = () => {
      axios.get("http://localhost:3001/transactions")
      .then((response) => setTransaction(response.data));
    }

    useEffect(() => {
      getTransaction();
    }, []);
    
    return(
        <div className='transactions'>
          {transaction.map((val, key) => {
            return <div className='transaction' key={key}>
                    <h3> Category: {val.category}</h3>
                    <h3> Description: {val.description} </h3>
                    <h3> Amount: ${val.amount} </h3>
                    <h3> Date: {val.date} </h3>
                    <h3> Type: {val.type} </h3>
                  </div>;
          })}
        </div>
    )
}

export default ExpenseList;