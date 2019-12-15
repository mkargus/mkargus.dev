import { Request, Response } from 'express'

const getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About'
  })
}

const getProjects = (req: Request, res: Response): void => {
  res.render('projects', {
    title: 'Projects'
  })
}

export { getAbout, getProjects }
