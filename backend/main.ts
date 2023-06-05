import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import type { INestApplication } from '@nestjs/common'
import type { NextFunction, Request, Response } from 'express'
import { AppModule } from './app/app.module'

let app: INestApplication

export async function getApp() {
  if (!app) {
    app = await NestFactory.create<INestApplication>(AppModule, {
      bodyParser: false,
    })

    app.setGlobalPrefix('api')

    await app.init()
  }

  return app
}

export function bindHandler(req: Request,
  res: Response,
  next: NextFunction) {
  getApp().then((app) => {
    app.getHttpAdapter().getInstance().handle(req, res, next)
  })
}
