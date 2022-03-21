import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WorkoutService {
    constructor(private readonly _prismaService: PrismaService){}

    findOne(id: string){
        return ""
    }

    findAll(){
        return
    }

}
