import { Request, Response } from 'express'

const getContactIndex = (req: Request, res: Response): void => {
  res.render('contact', {
    title: 'Contact'
  })
}

// const postContact = (req: Request, res: Response, next: NextFunction): void => {
  // next()
// }

export { getContactIndex }
