import React from 'react';

function Header ({ totalAmount }){
    return (
        <header>
            <h1>Alkemy Expense Tracker</h1>
            <h2 className="total-expense">
                <span className='balance'>Balance: </span> 
                ${ totalAmount }
            </h2>
        </header>
    )
}

export default Header;