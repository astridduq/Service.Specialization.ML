import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config = require('config');
import { Logger } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.get('server.port') || 3000;

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);
  await app.listen(port);
  Logger.log(`Aplicación escuchando en el puerto ${port}`);
}
bootstrap();