import { Request, Response, NextFunction } from 'express'
// import fs from 'fs'

const getBlogIndex = (req: Request, res: Response): void => {
  res.render('blog', {
    title: 'Blog'
  })
}

const getBlogPost = (req: Request, res: Response, next: NextFunction): void => {
  next()
}

const getBlogFeed = (req: Request, res: Response): void => {
  res.sendStatus(501)
}

export { getBlogIndex, getBlogPost, getBlogFeed }
