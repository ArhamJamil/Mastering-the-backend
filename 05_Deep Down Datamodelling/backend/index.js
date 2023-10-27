import express from 'express'
import connectDB from './config/dbConn.js'
import "dotenv/config"

const app = express()

// Connect to the database
// connectDB();
const PORT = process.env.PORT
const HOST = process.env.HOST


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${HOST}${PORT}`);
  });