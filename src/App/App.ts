import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import { createConnection } from 'typeorm'

import routes from '@config/Routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(routes)
  }

  private database (): void {
    createConnection().then(() => 'Database was Connected successful')
  }
}

export default new App().express
