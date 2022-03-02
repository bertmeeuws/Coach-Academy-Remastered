import { registerEnumType } from '@nestjs/graphql';

export enum DietplanScalarFieldEnum {
    id = "id",
    coachId = "coachId",
    clientId = "clientId"
}


registerEnumType(DietplanScalarFieldEnum, { name: 'DietplanScalarFieldEnum', description: undefined })
