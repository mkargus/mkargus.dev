import { Request, Response } from 'express'

export const getBlogIndex = (req: Request, res: Response): void => {
  res.render('blog', {
    title: 'Blog'
  })
}

export const getBlogFeed = (req: Request, res: Response): void => {
  res.sendStatus(501)
}
