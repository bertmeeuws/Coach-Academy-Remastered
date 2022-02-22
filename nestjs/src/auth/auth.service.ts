import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class AuthService {
  constructor(@InjectRedis('default') private readonly client: Redis) {}

  async ping(): Promise<string> {
    const cats = await this.client.get('cats');
    return 'test';
  }
}
