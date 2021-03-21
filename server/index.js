const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


// Conexión a la db
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'expensesystem',
});

//Petición post de presupuestos a la db
app.post('/create', (req, res) => {
    
    db.query('INSERT INTO expense_table (description, category, amount, date, type) '
    +'VALUES (?,?,?,?,?)',[req.body.desc, req.body.category, req.body.amount, req.body.date, req.body.type],
     (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('values inserted');
        }
    })
});

// Acción get del botón
app.get('/transactions/', (req, res) => {

    db.query('SELECT * FROM expense_table ORDER BY date DESC LIMIT 10;', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// Petición put
app.put('/update/:id', (req, res) => {
    
    db.query('UPDATE expense_table SET description=?, category=?, amount=?, date=? WHERE id = ?', 
    [req.body.newDesc, req.body.newCategory, req.body.newAmount, req.body.newDate, req.params.id],
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('values updated');
        }
    })
});



// Petición delete de presupuestos a la db
app.delete('/delete/:id', (req, res) => {

    db.query("DELETE FROM expense_table WHERE id = ?", [req.params.id],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});


app.listen(3001, () => console.log('Server started on port 3001'));