const express = require('express')
const router = express()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('hello notes')
})

module.exports=router