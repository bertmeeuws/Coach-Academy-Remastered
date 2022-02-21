import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateUserInput } from 'src/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: UserCreateInput) {
    const salt = bcrypt.genSaltSync(10);
    const hashed: string = bcrypt.hashSync(createUserInput.password, salt);

    const data: UserCreateInput = {
      ...createUserInput,
      password: hashed,
    };

    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
