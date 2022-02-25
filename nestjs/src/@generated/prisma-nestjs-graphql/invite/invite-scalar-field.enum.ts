import { registerEnumType } from '@nestjs/graphql';

export enum InviteScalarFieldEnum {
    id = "id",
    coachId = "coachId",
    createdAt = "createdAt",
    invalidated = "invalidated"
}


registerEnumType(InviteScalarFieldEnum, { name: 'InviteScalarFieldEnum', description: undefined })
