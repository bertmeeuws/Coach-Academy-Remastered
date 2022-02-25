import { registerEnumType } from '@nestjs/graphql';

export enum ClientScalarFieldEnum {
    id = "id",
    userId = "userId",
    surname = "surname",
    name = "name",
    dob = "dob",
    phone = "phone",
    address = "address",
    number = "number",
    postal = "postal",
    city = "city",
    coachId = "coachId",
    inviteId = "inviteId"
}


registerEnumType(ClientScalarFieldEnum, { name: 'ClientScalarFieldEnum', description: undefined })
