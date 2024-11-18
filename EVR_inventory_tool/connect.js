const mysql = require('mysql2')
const express = require('express')

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Create a connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'inventory_db'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as id ' + db.threadId);
});

// simple get request to see if working
app.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err)
            return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and Password are required' })
    }
    const query = 'SELECT * FROM admins WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error querying the database: ', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    });
});

app.get("/GHODashboard", (req, res) => {
    const query = `SELECT * FROM ITEMS WHERE site_code = 'GHO'`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json(results)
    })
})

app.get("/FRODashboard", (req, res) => {
    const query = "SELECT * FROM ITEMS WHERE site_code == 'FRO'";
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json(results)
    })
})

const port = 5000

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
