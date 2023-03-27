const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
var cors = require('cors')



const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

app.use('/api/user',require('./routes/user'))
app.use('/api/admin',require('./routes/admin'))

app.listen(port, () => {
  console.log(`iNotebook Backend listening on port ${port}`)
}) 