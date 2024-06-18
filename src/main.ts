import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config = require('config');
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.get('server.port') || 3000;
  await app.listen(port);
  Logger.log(`Aplicación escuchando en el puerto ${port}`);
}
bootstrap();
