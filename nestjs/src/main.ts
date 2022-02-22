import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/index';

import * as session from 'express-session';
import * as redisSession from 'connect-redis';
import * as Redis from 'ioredis';

let RedisStore = redisSession(session);
let redisClient = new Redis(config.redis);

const SESSION_SECRET = 'dqooqofzefsqfgfsdezg';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      saveUninitialized: false,
      secret: SESSION_SECRET,
      resave: false,
    }),
  );

  await app.listen(3000);
}
bootstrap();
