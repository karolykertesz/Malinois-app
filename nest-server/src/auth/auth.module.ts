import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/enteties/auth';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CreateCookie } from 'src/middlewares/create-cookie';

@Module({
  providers: [AuthService, ConfigModule, CreateCookie, ConfigService],
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([Auth])],
  exports: [AuthService],
})
export class AuthModule {}
