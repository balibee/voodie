const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Profile' })
})

// router.get('/bootstrap', (req, res) => {
//   res.render('bootstrap', { title: 'bootstrap' })
// })

module.exports = router
