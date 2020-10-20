const express = require('express')

const router = express.Router()

const Foodie = require('../models/foodie')
const Users = require('../models/users')

const users = new Users()

/* GET signup page. */
router.get('/', function (req, res) {
  res.render('signup', { title: 'Signup' })
})

// GET sign up input

router.post('/', function (req, res) {
  const foodie = new Foodie(req.body.name, req.body.email, req.body.password)
  users.foodies.push(foodie)
  res.redirect('/homepage')
})

module.exports = router
