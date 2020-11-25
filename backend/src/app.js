const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const cors = require('cors')
const helmet = require('helmet')

const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const foodiesRouter = require('./routes/foodies')
const recipesRouter = require('./routes/recipes')
const mealPlannerRouter = require('./routes/mealplanner')
const accountRouter = require('./routes/account')
const Foodie = require('./models/foodie')

const app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'], usePolling: true })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}

app.set('trust proxy', 1)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())

app.use(
  session({
    secret: ['thisisasupersecuresecretsecret', 'thisisanothersupernotsosecretsecret'],
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      resave: true,
      saveUninitialized: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
      sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict',
      secure: process.env.NODE_ENV == 'production',
    },
  })
)

// Configure passport middleware
app.use(passport.initialize())
app.use(passport.session())

passport.use(Foodie.createStrategy())

passport.serializeUser(Foodie.serializeUser())
passport.deserializeUser(Foodie.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

// app.use('api', (req, res, next) => {
//   req.session.viewCount = req.session.viewCount || 0
//   req.session.viewCount++
//   next()
// })

// routers
app.use('/api/', indexRouter)
app.use('/api/account', accountRouter)
app.use('/api/foodies', foodiesRouter)
app.use('/api/recipes', recipesRouter)
app.use('/api/mealplanner', mealPlannerRouter)

// catch 404 and forward to error handler
// eslint-disable-next-line no-use-before-define
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)

  res.send({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') == 'development' ? err.stack : '',
  })
})

module.exports = app
