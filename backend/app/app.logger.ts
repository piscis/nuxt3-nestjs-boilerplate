import type { NestMiddleware } from '@nestjs/common'
import { Injectable, Logger } from '@nestjs/common'
import type { NextFunction, Request, Response } from 'express'

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP')

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl: url } = request
    const userAgent = request.get('user-agent') || ''

    response.on('close', () => {
      const { statusCode } = response
      const contentLength = response.get('content-length')

      this.logger.log(
        `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${
          ip || ''
        }`,
      )
    })

    next()
  }
}
