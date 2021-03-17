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
    const desc = req.body.desc;
    const amount = req.body.amount;
    const date = req.body.date;
    const type = req.body.type;
    const category = req.body.category;
    const userId = req.body.userId;

    db.query('INSERT INTO expense_table (description, amount, date, type, category, userID) VALUES (?,?,?,?,?,1)', [desc, amount, date, type, category, userId],
     (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('values inserted');
        }
    })
});

// Acción get del botón
app.get('/transactions', (req, res) => {
    db.query("SELECT * FROM expense_table", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.listen(3001, () => console.log('Server started on port 3001'));