import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SesssionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void) {
    done(null, user);
  }
  deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
    done(null, payload);
  }
}
