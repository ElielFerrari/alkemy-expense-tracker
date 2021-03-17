import React from 'react';

function Header ({ totalAmount }){
    return (
        <header>
            <h1>Expense Tracker</h1>
            <div className="total-expense">${ totalAmount }</div>
        </header>
    )
}

export default Header;