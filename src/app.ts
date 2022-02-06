import express from 'express'
import {engine} from 'express-handlebars'

// Route Controllers
import * as appController from './controllers/app'
import * as contactController from './controllers/contact'
import * as miscController from './controllers/misc'

// Create Express server
const app = express()

// Express configs
app.set('port', 3000)
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

// Routes
app.get('/', appController.getIndex)
app.get('/about', miscController.getAbout)
app.get('/contact', contactController.getContactIndex)
// app.post('/contact', contactController.postContact)
app.get('/projects', miscController.getProjects)
app.use(appController.getPageNotFound)

export default app
