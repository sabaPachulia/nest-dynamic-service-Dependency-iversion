import { Inject, Injectable } from '@nestjs/common';
import { LOGGER_ID } from './lib/constants';
import { loggerInterface } from './lib/interfaces';

@Injectable()
export class LoggerService {
  constructor(
    @Inject(LOGGER_ID) private readonly LoogerMethod: loggerInterface,
  ) {}

  info(message: string) {
    this.LoogerMethod.info(message);
  }

  error(message: string) {
    this.LoogerMethod.error(message);
  }

  warn(message: string) {
    this.LoogerMethod.warn(message);
  }
}
