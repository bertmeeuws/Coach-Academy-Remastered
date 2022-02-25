import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';

@Resolver('Notification')
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation('createNotification')
  create(@Args('createNotificationInput') createNotificationInput: CreateNotificationInput) {
    return this.notificationService.create(createNotificationInput);
  }

  @Query('notification')
  findAll() {
    return this.notificationService.findAll();
  }

  @Query('notification')
  findOne(@Args('id') id: number) {
    return this.notificationService.findOne(id);
  }

  @Mutation('updateNotification')
  update(@Args('updateNotificationInput') updateNotificationInput: UpdateNotificationInput) {
    return this.notificationService.update(updateNotificationInput.id, updateNotificationInput);
  }

  @Mutation('removeNotification')
  remove(@Args('id') id: number) {
    return this.notificationService.remove(id);
  }
}
