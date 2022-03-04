import { ClientService } from './../client/client.service';
import { CoachService } from './../coach/coach.service';
import { ENUM_USER_ROLES } from '../types/enums';
import { MyContext } from 'src/types/my-context';
import { CreateLoginInput, RegisterUserInput } from './../graphql';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';
import { ClientCreateInput } from 'src/@generated/prisma-nestjs-graphql/client/client-create.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly coachService: CoachService,
    private readonly clientService: ClientService,
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


    switch(user.role){
      case ENUM_USER_ROLES.CLIENT:
        const client = (await this.clientService.findClientByUserId(user.id));
        if(!client){
          throw new GraphQLError("Something went wrong")
        }
        (ctx.req.session as any)['role'] = user.role;
        (ctx.req.session as any)['typeId'] = client.id;
        break;
      case ENUM_USER_ROLES.CLIENT:
        const coach = await this.coachService.findCoachByUserId(user.id);
        if(!coach){
          throw new GraphQLError("Something went wrong")
        }
        (ctx.req.session as any)['role'] = user.role;
        (ctx.req.session as any)['typeId'] = coach.id;
        break;
    }

    (ctx.req.session as any)['userId'] = user.id;
  
    return user.id;
  }

  async register(
    registerUserInput: RegisterUserInput,
    ctx: MyContext,
  ): Promise<boolean> {
    console.log(registerUserInput);

    const { email, password, surname, name, type } = registerUserInput;

    if (!Object.values(ENUM_USER_ROLES).includes(type as any)) {
      throw new GraphQLError('Role not valid');
    }

    const createdUser = await this.userService.create({
      email,
      password,
      role: type,
    });

    console.log(createdUser);

    if ((type as any) === ENUM_USER_ROLES.COACH) {
      const coach = await this.coachService.create({
        surname,
        name,
        userId: createdUser.id,
      });
      (ctx.req.session as any)['userId'] = createdUser.id;
      (ctx.req.session as any)['role'] = type;
      (ctx.req.session as any)['typeId'] = coach.id;
      return true;
    }

    if ((type as any) === ENUM_USER_ROLES.CLIENT) {
      const client = await this.clientService.create({
        surname: surname,
        name: name,
        userId: createdUser.id,
      });
      (ctx.req.session as any)['userId'] = createdUser.id;
      (ctx.req.session as any)['role'] = type;
      (ctx.req.session as any)['typeId'] = client.id;
      return true;
    }

    return false;
  }
}
