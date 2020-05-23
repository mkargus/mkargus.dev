import { Request, Response, NextFunction } from 'express'
import blogfeed from '../json/blogfeed.json'

const getBlogIndex = (req: Request, res: Response): void => {
  res.render('blog', {
    title: 'Blog',
    post: blogfeed
  })
}

const getBlogPost = (req: Request, res: Response, next: NextFunction): void => {
  next()
}

const getBlogFeed = (req: Request, res: Response): void => {
  res.sendStatus(501)
}

export { getBlogIndex, getBlogPost, getBlogFeed }
