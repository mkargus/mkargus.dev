import { Request, Response, NextFunction } from 'express'

const getContactIndex = (req: Request, res: Response, next: NextFunction): void => {
  next()
}

const postContact = (req: Request, res: Response, next: NextFunction): void => {
  next()
}

export { getContactIndex, postContact }
