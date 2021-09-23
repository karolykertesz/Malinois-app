import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Auth } from './enteties/auth';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MessageEntity } from './messages/message.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: [".env"],
    }),
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
     host: "localhost",
      synchronize: true,
      autoLoadEntities: true,
      entities: [Auth],
      password: "pass123",
      database: "postgres",
      port: 5432,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
