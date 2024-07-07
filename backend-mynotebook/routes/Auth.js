const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.post('/',[
    body('name','Please enter a valid name').isLength({ min: 5 }),
    body('email','Please enter a valid mail id').isEmail(),
    body('password','Password length should be 8 minimum').isLength({ min: 8 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err.message)
      res.json({error: `Please enter a unique mail id`})});
})

module.exports=router