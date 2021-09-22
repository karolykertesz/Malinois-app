import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(messageService: MessagesService){}
  @Get(":id")
  getAllMyMessages(@Param("id") id:string){

  }
}
