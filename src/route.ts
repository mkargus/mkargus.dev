import { Request, Response } from 'express'

/*
* GET /
* Home page
*/
export let getIndex = (req: Request, res: Response): void => {
  res.render('home', {
    title: 'Home'
  })
}

/*
* GET /about
* About page
*/
export let getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About'
  })
}

/*
* GET /blog
* Blog Index
*/
export let getBlog = (req: Request, res: Response): void => {
  res.render('blog', {
    title: 'Blog'
  })
}

/*
* GET /projects
* Projects page
*/
export let getProjects = (req: Request, res: Response): void => {
  res.render('projects', {
    title: 'Projects'
  })
}

/*
* GET /*
* 404 page
*/
export let getPageNotFound = (req: Request, res: Response): void => {
  res.status(404).render('notfound', {
    title: '404'
  })
}
