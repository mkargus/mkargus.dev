import { Request, Response } from 'express'

// GET Home page
export const getIndex = (req: Request, res: Response): void => {
  res.render('home', {
    title: 'Home'
  })
}

// GET About page
export const getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About'
  })
}

// GET Blog index
export const getBlog = (req: Request, res: Response): void => {
  res.render('blog', {
    title: 'Blog'
  })
}

// GET Project index
export const getProjects = (req: Request, res: Response): void => {
  res.render('projects', {
    title: 'Projects'
  })
}

// GET 404
export const getPageNotFound = (req: Request, res: Response): void => {
  res.status(404).render('notfound', {
    title: '404'
  })
}

// PWA Offline
export const getOffline = (req: Request, res: Response): void => {
  res.render('offline', {
    title: 'offline'
  })
}
