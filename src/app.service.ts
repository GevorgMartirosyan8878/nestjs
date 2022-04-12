import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'sayHello';
  }
  sayAbc(): string {
    return 'sayAbc'
  }
}
