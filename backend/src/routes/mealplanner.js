const express = require('express')

const router = express.Router()

// GET all recipes in database
router.get('/', async (req, res) => {
  res.send(200)
})

module.exports = router
