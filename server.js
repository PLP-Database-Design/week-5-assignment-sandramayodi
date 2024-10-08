const express = require ('express')
const app  = express()

require('dotenv').config(); // Load environment variables
const mysql = require('mysql2');


// Create MySQL connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the database
pool.getConnection((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

app.get('/', (req, res) => {
    res.send('Server is running!');
  });


// question one
app.get('/patients', async (req, res) => {
  try {
      const result = await pool.query('SELECT patient_id, first_name, last_name, date_of_birth FROM patients');
      res.json(result.rows);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// question 2

app.get('/providers', async (req, res) => {
  try {
      const result = await pool.query('SELECT first_name, last_name, provider_specialty FROM providers');
      res.json(result.rows);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

//question 3

app.get('/providers', async (req, res) => {
  try {
      const result = await pool.query('SELECT first_name, last_name, provider_specialty FROM providers');
      res.json(result.rows);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});


// question 4


app.get('/providers/specialty/:specialty', async (req, res) => {
  const { specialty } = req.params;
  try {
      const result = await pool.query('SELECT * FROM providers WHERE provider_specialty = $1', [specialty]);
      res.json(result.rows);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});
    
  

  const PORT= 3000
   
  app.listen(PORT, () => {
    console.log(`server is runnig on http://localhost:${PORT}`);
  })