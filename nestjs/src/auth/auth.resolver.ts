import { UsersService } from 'src/users/users.service';
import { CreateLoginInput } from './../graphql';
import { PrismaService } from './../../prisma/prisma.service';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';
import { MyContext } from 'src/types/my-context';
import { Req } from '@nestjs/common';
import { Request } from 'express';

import { session } from 'passport';
import { Session } from './decorators/session.gql.decorators';

@Resolver('Login')
export class AuthResolver {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  @Mutation('createLogin')
  async login(
    @Args('createLogin') createLogin: CreateLoginInput,
    @Context() context: MyContext,
    @Session() session,
  ): Promise<string> {
    const user = await this.userService.findByEmail(createLogin.email);
    if (!user) {
      throw new GraphQLError('Login not valid');
    }

    const isMatch = await bcrypt.compare(createLogin.password, user.password);

    if (!isMatch) {
      throw new GraphQLError('Login not valid');
    }
    console.log(context.req.sessionID);

    (context.req.session as any)['userId'] = user.id;

    //context.req.session['role'] = ['USER'];

    return 'OK';
  }

  @Mutation('logout')
  async logout(@Context() ctx: MyContext): Promise<boolean> {
    const userId = ctx.req.session['userId'];
    if (!ctx.req.session) {
      //throw new GraphQLError('Session not found');
    }
    ctx.req.session['userId'] = null;

    if (!ctx.res) {
      console.log('Res error!');
    }

    await ctx.req.session.destroy((err) => {});

    ctx.res.clearCookie('qid');

    return true;
  }
}
