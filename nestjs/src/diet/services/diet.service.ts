import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DietplanCreateInput } from 'src/@generated/prisma-nestjs-graphql/dietplan/dietplan-create.input';
import { CreateDietplanInput } from 'src/graphql';

@Injectable()
export class MealPlanService {
  constructor(private _prisma: PrismaService) {}

  create(createDiet: DietplanCreateInput) {
    return this._prisma.dietplan.create({
      data: createDiet
    });
  }

  findAll() {
    return this._prisma.dietplan.findMany();
  }

  findOne(id: string) {
    return this._prisma.dietplan.findUnique({
      where: {
        id: id
      }
    });
  }

  /*
  update(id: number, updateDietInput: UpdateDietInput) {
    return `This action updates a #${id} diet`;
  }
  */

  remove(id: string) {
    this._prisma.dietplan.delete({
      where: {
        id: id
      }
    });
  }
}
