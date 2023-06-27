import { Injectable } from '@nestjs/common';
import { LoggerService } from 'libs/logger/src';

@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {
    loggerService.info('done!');
    loggerService.error('done!');
    loggerService.warn('done!');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
