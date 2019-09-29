import express from 'express'
import path from 'path'
import * as route from './route'

// Create Express server
const app = express()

// Express configs
app.set('port', 3000)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.use(express.static('static'))

// Routes
app.get('/', route.getIndex)
app.get('/about', route.getAbout)
app.get('/blog', route.getBlog)
app.get('/projects', route.getProjects)
app.get('/offline', route.getOffline)
app.use(route.getPageNotFound)

export default app
