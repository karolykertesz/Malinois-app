import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { Auth } from 'src/enteties/auth';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
  imports: [AuthModule],
})
export class MessagesModule {}
