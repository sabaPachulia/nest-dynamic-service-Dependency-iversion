import { DynamicModule, Module } from '@nestjs/common';
import { loggerSource } from './lib/enums';
import { MorganLogger } from './lib/loggers/morgan-logger';
import { WinstonLogger } from './lib/loggers/winston-logger';
import { LoggerService } from './logger.service';
import { LOGGER_ID } from './lib/constants';

@Module({})
export class LoggerModule {
  public static forRoot(loggerName: loggerSource): DynamicModule {
    const Logger =
      loggerName == loggerSource.WINSTON ? WinstonLogger : MorganLogger;
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_ID,
          useClass: Logger,
        },
        LoggerService,
      ],
      exports: [LoggerService],
    };
  }
}
