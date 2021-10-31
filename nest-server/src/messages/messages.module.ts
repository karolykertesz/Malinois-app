import { Module } from '@nestjs/common';
import { Auth } from 'src/enteties/auth';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Message } from './message.entity';
import { AuthService } from 'src/auth/auth.service';
import { CreateCookie } from 'src/middlewares/create-cookie';

@Module({
  providers: [MessagesService, AuthService, ConfigService, CreateCookie],
  controllers: [MessagesController],
  imports: [TypeOrmModule.forFeature([Message, Auth]), ConfigModule],
})
export class MessagesModule {}
