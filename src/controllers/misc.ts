import { Request, Response } from 'express'
import projectJson from '../json/project.json'

const getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About'
  })
}

const getProjects = (req: Request, res: Response): void => {
  res.render('projects', {
    title: 'Projects',
    feed: projectJson
  })
}

export { getAbout, getProjects }
