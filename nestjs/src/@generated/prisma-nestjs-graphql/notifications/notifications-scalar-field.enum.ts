import { registerEnumType } from '@nestjs/graphql';

export enum NotificationsScalarFieldEnum {
    id = "id",
    type = "type",
    userId = "userId",
    createdAt = "createdAt",
    read = "read",
    content = "content"
}


registerEnumType(NotificationsScalarFieldEnum, { name: 'NotificationsScalarFieldEnum', description: undefined })
