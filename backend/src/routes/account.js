const express = require('express')
const passport = require('passport')

const Foodie = require('../models/foodie')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.user)
})

router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    const foodie = await Foodie.register({ name, email }, password)
    res.send(foodie)
  } catch (e) {
    next(e)
  }
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router
