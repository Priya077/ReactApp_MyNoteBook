const express = require('express');
const User = require('../models/User');
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.post('/', (req, res) => {
    const obj = {
        name: 'tester',
        email: 'demoTest@gmail.com',
        password: '12345678979'
    }
    const user = User(obj);
    user.save();
    res.send(obj);
})

module.exports=router