import * as Redis from 'ioredis';
import { config } from '../config/index';

// export const redis = new Redis(parseInt(process.env.REDIS_PORT),`${process.env.REDIS_HOST}`);

export const redis = new Redis(config.redis);
