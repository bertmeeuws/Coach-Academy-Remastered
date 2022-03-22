import { AuthService } from './auth.service';
import { GetUserId } from './decorators/getuserid.decorator';
import { UsersService } from 'src/users/users.service';
import {
  CreateLoginInput,
  RegisterUserInput,
  MeInfo,
  UserType
} from './../graphql';
import { PrismaService } from './../../prisma/prisma.service';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';
import { MyContext } from 'src/types/my-context';
import { Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.gql.guard';
import { Session } from './decorators/session.gql.decorators';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly authService: AuthService
  ) {}

  @UseGuards(AuthGuard)
  @Query('me')
  async me(@GetUserId() userId: number): Promise<MeInfo> {
    const user = await this.userService.findOne(userId);
    return {
      role: user.role as UserType,
      id: user.id
    };
  }

  @Mutation('createLogin')
  async login(
    @Args('createLogin') createLogin: CreateLoginInput,
    @Context() context: MyContext
  ): Promise<number> {
    return this.authService.login(createLogin, context);
  }

  @Mutation('registerUser')
  async register(
    @Args('registerUser') registerUser: RegisterUserInput,
    @Context() context: MyContext
  ): Promise<boolean> {
    return this.authService.register(registerUser, context);
  }

  @Mutation('logout')
  async logout(@Context() ctx: MyContext): Promise<boolean> {
    const userId = ctx.req.session['userId'];
    if (!ctx.req.session) {
      //throw new GraphQLError('Session not found');
    }
    ctx.req.session['userId'] = null;

    await ctx.req.session.destroy((err) => {
      if (err) {
        console.log('Error while deleting cookie');
      }
    });

    ctx.res.clearCookie('qid');

    return true;
  }
}
