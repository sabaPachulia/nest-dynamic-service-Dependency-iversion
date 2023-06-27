import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'libs/logger/src';
import { loggerSource } from 'libs/logger/src/lib/enums';

@Module({
  imports: [LoggerModule.forRoot(loggerSource.WINSTON)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
