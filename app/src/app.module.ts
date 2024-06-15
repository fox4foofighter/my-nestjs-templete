import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './message/message.module';
const settings = require('../ormconfig.js');


console.log('TypeORM Settings:', settings);
console.log('env:', process.env.NODE_ENV);

@Module({
  imports: [
    TypeOrmModule.forRoot(settings),
    MessageModule,
  ],
})
export class AppModule {}
