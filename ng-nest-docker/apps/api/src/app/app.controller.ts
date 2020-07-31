import { Controller, Get } from '@nestjs/common';

import { Message } from '@ng-nest-docker/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  @Get('/api/hello')
  getData(): Message {
    return this.appService.getData();
  }
}
