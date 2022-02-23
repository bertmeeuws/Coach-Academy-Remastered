import { MyContext } from 'src/types/my-context';
import { CreateLoginInput } from './../graphql';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async login(createLogin: CreateLoginInput, ctx: MyContext): Promise<number> {
    const user = await this.userService.findByEmail(createLogin.email);
    if (!user) {
      throw new GraphQLError('Login not valid');
    }

    const isMatch = await bcrypt.compare(createLogin.password, user.password);

    if (!isMatch) {
      throw new GraphQLError('Login not valid');
    }

    (ctx.req.session as any)['userId'] = user.id;

    //Before returning were creating the client or coach profile

    return user.id;
  }
}
