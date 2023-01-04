import { ValidationPipe } from '@nestjs/common/';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(new ValidationPipe())
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
