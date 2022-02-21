import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLDateTime } from 'graphql-iso-date';
import { RedisModule, RedisModuleOptions } from 'nestjs-redis';

const options: RedisModuleOptions = {
  url: 'http://localhost',
  port: 6379,
  password: 'MDNcVb924a',
};

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      resolvers: { DateTime: GraphQLDateTime },
    }),
    UsersModule,
    RedisModule.register(options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
