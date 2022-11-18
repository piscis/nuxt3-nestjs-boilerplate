import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { INestApplication } from "@nestjs/common";
import { Request, NextFunction, Response } from "express";

let app: INestApplication;

export const getApp = async () => {
  if (!app) {
    app = await NestFactory.create<INestApplication>(AppModule, {
      bodyParser: false,
    });

    app.setGlobalPrefix("api");

    await app.init();
  }

  return app;
};

export const bindHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getApp().then((app) => {
    app.getHttpAdapter().getInstance().handle(req, res, next);
  });
};
