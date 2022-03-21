import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ClientCreateInput } from '../@generated/prisma-nestjs-graphql/client/client-create.input';
import { ClientUpdateInput } from '../@generated/prisma-nestjs-graphql/client/client-update.input';
import { UsersService } from 'src/users/users.service';
import { CreateClientInput, UpdateClientInput } from 'src/graphql';
import { MinioService } from 'nestjs-minio-client';
import { retryWhen } from 'rxjs';
import { MinioClientService } from 'src/minio-client/minio-client.service';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly _minioClientService: MinioClientService,
  )
  {}

  create(createClientInput: CreateClientInput) {
    return this.prisma.client.create({
      data: createClientInput,
    });
  }

  findAll(id: number, filter) {
    if (filter) {
      return this.prisma.client.findMany({
        where: {
          coachId: id,
          OR: [
            {
              surname: {
                contains: filter,
                mode: 'insensitive',
              },
            },
            {
              name: {
                contains: filter,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
    }
    return this.prisma.client.findMany({
      where: {
        coachId: id,
      },
    });
  }

  findOneAsCoach(clientId: number, coachId) {
    return this.prisma.client.findFirst({
      where: {
        id: clientId,
        coachId: coachId,
      },
    });
  }

  findClientByUserId(id: number){
    return this.prisma.client.findFirst({
      where: {
        userId: id
      }
    })
  }

  findOne(clientId: number) {
    return this.prisma.client.findFirst({
      where: {
        id: clientId,
      },
    });
  }

  getUser(userId) {
    return this.userService.findOne(userId);
  }

  async update(id: number, updateClientInput: UpdateClientInput) {

    const {surname, name, address, postal, city, dob, phone, profile_image} = updateClientInput;
  
    const updated = await this.prisma.client.update({
      where: {
        id: id
      },
      data: {
        surname,
        name,
        address,
        postal,
        city,
        dob,
        phone,
      }
    })

    console.log("inside upload")


    if(profile_image){
      const upload_url = await this._minioClientService.upload(await profile_image)
      await this.prisma.user.update({
        where: {
          id: updated.userId
        },
        data: {
            profile_image: upload_url.path
        }
      })

    }
    return true
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

}
