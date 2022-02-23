import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/index';

import * as session from 'express-session';
import * as redisSession from 'connect-redis';
import * as Redis from 'ioredis';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

let RedisStore = redisSession(session);
let redisClient = new Redis(config.redis);

const SESSION_SECRET = 'dqooqofzefsqfgfsdezg';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.set('trust proxy', true);

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    origin: [
      'https://studio.apollogaphql.com',
      'http://localhost:3000/graphql',
      'http://localhost:3002',
    ],
    methods: 'GET, PUT, POST, DELETE',
  });

  app.use(
    session({
      name: 'qid',
      store: new RedisStore({ client: redisClient }),
      saveUninitialized: false,
      secret: SESSION_SECRET,
      resave: false,
      cookie: {
        sameSite: 'lax',
        httpOnly: true,
        secure: false, //true in production or apollo playground
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
