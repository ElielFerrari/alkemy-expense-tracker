import React, { useState } from 'react';
import axios from 'axios';

function ExpenseEditForm ({ editList }) {

    const [newCategory, setNewCategory] = useState(editList.category)
    const [newDesc, setNewDesc] = useState(editList.description)
    const [newAmount, setNewAmount] = useState(editList.amount)
    const [newDate, setNewDate] = useState(null)

    const editTransaction = (id) => axios.put(`http://localhost:3001/update/${id}`, {
        newCategory,
        newDesc,
        newAmount,
        newDate
    })

    return (
        <form autoComplete="off">
            <label >Category:</label>
            <input defaultValue={editList.category} onChange={(e)=> {setNewCategory(e.target.value)}} type="text" required />
            <label  >Description:</label>
            <input defaultValue={editList.description} onChange={(e) => {setNewDesc(e.target.value)}} type="text"  required/>
            <label >Amount:</label>
            <input defaultValue={editList.amount} onChange={(e) => {setNewAmount(e.target.value)}} type="number" required/>
            <label >Date:</label>
            <input onChange={(e) => {setNewDate(e.target.value)}} type="date" required />
    
            <button type='submit' onClick={() => editTransaction(editList.id) } >Edit Transaction</button>
        </form>
    )
}

export default ExpenseEditForm;