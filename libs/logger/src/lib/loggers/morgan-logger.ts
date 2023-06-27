import { Injectable } from '@nestjs/common';
import { loggerInterface } from '../interfaces';

@Injectable()
export class MorganLogger implements loggerInterface {
  warn(message: string): void {
    console.warn(`Morgan - ${message}`);
  }
  error(message: string): void {
    console.error(`Morgan - ${message}`);
  }
  info(message: string): void {
    console.info(`Morgan - ${message}`);
  }
}
