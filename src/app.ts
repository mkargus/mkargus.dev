import express from 'express'
import path from 'path'
import * as route from './route'

// Route Controllers
import * as blogController from './controllers/blog'

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
app.get('/blog', blogController.getBlogIndex)
app.get('/blog/feed/:id(rss|xml)', blogController.getBlogFeed)
app.get('/projects', route.getProjects)
app.use(route.getPageNotFound)

export default app
