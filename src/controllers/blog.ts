import { Request, Response, NextFunction } from 'express'
// import fs from 'fs'

export const getBlogIndex = (req: Request, res: Response): void => {
  res.render('blog', {
    title: 'Blog'
  })
}

export const getBlogPost = (req: Request, res: Response, next: NextFunction): void => {
  next()
}

export const getBlogFeed = (req: Request, res: Response): void => {
  res.sendStatus(501)
}
