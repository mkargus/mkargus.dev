import { Request, Response } from 'express'

const getIndex = (req: Request, res: Response): void => {
  res.render('home', {
    title: 'Home',
    tempDarkMode: true
  })
}

const getPageNotFound = (req: Request, res: Response): void => {
  res.status(404).render('notfound', {
    title: '404',
    disableSEO: true
  })
}

export { getIndex, getPageNotFound }
