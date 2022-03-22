import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DietplanCreateInput } from 'src/@generated/prisma-nestjs-graphql/dietplan/dietplan-create.input';
import { CreateDietplanInput } from 'src/graphql';
import { MealPlanService } from './services/diet.service';

@Resolver('Dietplan')
export class DietResolver {
  constructor(
    private readonly _dietService: MealPlanService,
    private _prisma: PrismaService
  ) {}

  @Mutation('createDietplan')
  create(@Args('createDiet') createDiet: DietplanCreateInput) {
    return this._dietService.create(createDiet);
  }

  @Query('diets')
  findAll() {
    return this._dietService.findAll();
  }

  @Query('diet')
  findOne(@Args('id') id: string) {
    return this._dietService.findOne(id);
  }
  /*

  @Mutation('updateDiet')
  update(@Args('updateDietInput') updateDietInput: UpdateDietInput) {
    return this.dietService.update(updateDietInput.id, updateDietInput);
  }
  */

  @Mutation('removeDietplan')
  remove(@Args('id') id: string) {
    return this._dietService.remove(id);
  }
}
