import { Request, Response } from 'express'

export const getIndex = (req: Request, res: Response): void => {
  res.render('home', {
    title: 'Home'
  })
}

export const getPageNotFound = (req: Request, res: Response): void => {
  res.status(404).render('notfound', {
    title: '404'
  })
}
