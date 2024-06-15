import { Controller, Get, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(parseInt(id, 10));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(parseInt(id, 10));
  }
}
