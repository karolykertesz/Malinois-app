import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { Auth } from 'src/enteties/auth';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
  imports: [TypeOrmModule.forFeature([Auth]),ConfigModule],


})
export class MessagesModule {}
