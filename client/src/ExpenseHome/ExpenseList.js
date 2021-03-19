import React, { useEffect } from 'react';
import axios from 'axios';
import ExpenseEditForm from './ExpenseEditForm';

function ExpenseList({ transaction, setTransaction }) {
    
    // const [showForm, setShowForm] = useState(false);
    
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
                    <h3> Date: {val.date} </h3>
                    <h3> Type: {val.type} </h3>
                    <button onClick={() => deleteTransaction(val.id)} > Delete</button>
                    {/* <button onClick={() => setShowForm(!showForm)}> Edit </button> */}
                    <ExpenseEditForm editList={val} />
                  </div>;
          })}
          {/* <div style={{display: this.state.showForm? 'block ': 'none' }}><ExpenseEditForm/> </div> */}

        </div>
    )
}

export default ExpenseList;