import { Request, Response } from 'express'

export const getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About'
  })
}

export const getProjects = (req: Request, res: Response): void => {
  res.render('projects', {
    title: 'Projects'
  })
}
