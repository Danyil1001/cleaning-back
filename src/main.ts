import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: [
      'http://localhost:3000',
      'https://lms.corpsoft.io',
      'https://accounts.google.com'
    ],
    allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization',
    ],
    exposedHeaders: 'Authorization',
    credentials: true,
    methods: ['GET', 'PUT', 'PATCH', 'OPTIONS', 'POST', 'DELETE'],
  };

  app.enableCors(corsOptions);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Lms listening on port ${process.env.PORT} on ${await app.getUrl()}`);

}
bootstrap(); 
