import { Injectable } from '@nestjs/common';
import { loggerInterface } from '../interfaces';

@Injectable()
export class WinstonLogger implements loggerInterface {
  warn(message: string): void {
    console.warn(`Winston - ${message}`);
  }
  error(message: string): void {
    console.error(`Winston - ${message}`);
  }
  info(message: string): void {
    console.info(`Winston - ${message}`);
  }
}
