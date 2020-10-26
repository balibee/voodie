const express = require('express')

const router = express.Router()

const Foodie = require('../models/foodie')
/* GET signup page. */
router.get('/', (req, res) => {
  res.render('signup', { title: 'Signup' })
})

// POST sign up input
router.post('/', async (req, res) => {
  await Foodie.create({ name: req.body.name, email: req.body.email, password: req.body.password })
  res.send('sucessfully signed up')
})

module.exports = router
