import express from 'express'
import exphbs from 'express-handlebars'

// Route Controllers
import * as appController from './controllers/app'
import * as blogController from './controllers/blog'
import * as contactController from './controllers/contact'
import * as miscController from './controllers/misc'

// Create Express server
const app = express()

// Express configs
app.set('port', 3000)
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

// Routes
app.get('/', appController.getIndex)
app.get('/about', miscController.getAbout)
app.get('/blog', blogController.getBlogIndex)
app.get('/blog/:post', blogController.getBlogPost)
app.get('/blog/feed/:id(rss|xml)', blogController.getBlogFeed)
app.get('/contact', contactController.getContactIndex)
// app.post('/contact', contactController.postContact)
app.get('/projects', miscController.getProjects)
app.use(appController.getPageNotFound)

export default app
