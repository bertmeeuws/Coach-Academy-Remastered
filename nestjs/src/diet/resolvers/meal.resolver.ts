import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MealCreateInput } from "src/@generated/prisma-nestjs-graphql/meal/meal-create.input";
import { CreateMealInput } from "src/graphql";
import { MealService } from "../services/meal.service";


@Resolver("Meal")
export class MealResolver{
    constructor(private readonly _mealService : MealService){}


    @Mutation("createMeal")
    create(@Args('createMeal') createMeal: MealCreateInput     ){
        this._mealService.create(createMeal)
    }


    @Query("meals")
    findAll(){
        return this._mealService.findAll()
    }

    @Query("meals")
    findOne(@Args("id") id: string ){
        return this._mealService.findOne(id)
    }


}    
