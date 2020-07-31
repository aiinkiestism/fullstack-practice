import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create<NestFastifyApplication>(
  const app = await NestFactory.create(
    AppModule,
    // new FastifyAdapter(),
  );
  
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // app.useStaticAssets({
  //   root: join(__dirname, '..', 'client/dist/client',
  //   prefix: '/',
  // });

  await app.listen(3000);
}
bootstrap();
