const express = require ('express')
const app  = express()

require('dotenv').config(); // Load environment variables
const mysql = require('mysql2');


// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
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




    
  

  const PORT= 3000
   
  app.listen(PORT, () => {
    console.log(`server is runnig on http://localhost:${PORT}`);
  })