import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import type { INestApplication } from '@nestjs/common'
import type { NextFunction, Request, Response } from 'express'
import { AppModule } from './app/app.module'

let app: INestApplication

export const getApp = async () => {
  if (!app) {
    app = await NestFactory.create<INestApplication>(AppModule, {
      bodyParser: false,
    })

    app.setGlobalPrefix('api')

    await app.init()
  }

  return app
}

export const bindHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  getApp().then((app) => {
    app.getHttpAdapter().getInstance().handle(req, res, next)
  })
}
