import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // ⬅️ відкидає зайві поля, але також ЗАЛИШАЄ дозволені
      forbidNonWhitelisted: false,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
