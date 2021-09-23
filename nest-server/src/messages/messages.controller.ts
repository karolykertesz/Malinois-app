import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(messageService: MessagesService) {}
  @Get('/get')
  getAllMyMessages() {
    return HttpCode(200);
  }
}
