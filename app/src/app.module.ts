import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './message/message.module';
const settings = require('../ormconfig.js');


@Module({
  imports: [
    TypeOrmModule.forRoot(settings),
    MessageModule,
  ],
})
export class AppModule {}
