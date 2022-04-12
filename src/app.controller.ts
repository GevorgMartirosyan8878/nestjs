import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('sayHello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('abc')
  withAbc(): string {
    return this.appService.sayAbc();
  }
}
