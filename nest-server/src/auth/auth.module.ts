import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/enteties/auth';
import { MessagesService } from 'src/messages/messages.service';
import { MessagesController } from 'src/messages/messages.controller';

@Module({
  providers: [AuthService, MessagesService],
  controllers: [AuthController, MessagesController],
  imports: [TypeOrmModule.forFeature([Auth])],
})
export class AuthModule {}
