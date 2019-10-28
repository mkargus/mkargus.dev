import express from 'express'
import path from 'path'

// Route Controllers
import * as appController from './controllers/app'
import * as blogController from './controllers/blog'
// import * as contactController from './controllers/contact'
import * as miscController from './controllers/misc'

// Create Express server
const app = express()

// Express configs
app.set('port', 3000)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.use(express.static('static'))

// Routes
app.get('/', appController.getIndex)
app.get('/about', miscController.getAbout)
app.get('/blog', blogController.getBlogIndex)
app.get('/blog/:post', blogController.getBlogPost)
app.get('/blog/feed/:id(rss|xml)', blogController.getBlogFeed)
// app.get('/contact', contactController.getContactIndex)
app.get('/projects', miscController.getProjects)
app.use(appController.getPageNotFound)

export default app
