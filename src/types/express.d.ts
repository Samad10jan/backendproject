import type { Multer } from 'multer'

declare global {
  namespace Express {
    interface Request {
      user?: any
      file?: Multer.File
      files?: { [fieldname: string]: Multer.File[] }
    }
  }
}

export {}
