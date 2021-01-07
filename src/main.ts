import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  // Logger logs messages in the console
  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
