import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import * as route from './route'

// Create Express server
const app = express()

// Express configs
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.use(compression({ threshold: 0 }))
app.use(helmet())
app.use(express.static('static'))
app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'none'"],
    fontSrc: ['https://fonts.gstatic.com'],
    formAction: ["'none'"],
    frameAncestors: ["'none'"],
    imgSrc: ["'self'"],
    manifestSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", 'https://fonts.googleapis.com']
  }
}))

// Routes
app.get('/', route.getIndex)
app.get('/about', route.getAbout)
app.get('/blog', route.getBlog)
app.get('/projects', route.getProjects)
app.get('/offline', route.getOffline)
app.use(route.getPageNotFound)

export default app
