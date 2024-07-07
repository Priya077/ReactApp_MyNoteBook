const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Priya, Welcome to MyNoteBook!')
})

app.use('/auth', require('./routes/Auth'))
app.use('/notes', require('./routes/Note'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
