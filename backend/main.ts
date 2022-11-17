import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { INestApplication } from "@nestjs/common";

export module Backend {

  let app: INestApplication;

  export async function getApp() {
    if (!app) {
      app = await NestFactory.create<INestApplication>(
        AppModule,
        { bodyParser: false }
      );

      app.setGlobalPrefix("api");

      await app.init();
    }

    return app;
  }

  export async function getListener(req, res, next) {
    const app = await getApp();
    app.getHttpAdapter().getInstance().handle(req, res, next);
  }
}