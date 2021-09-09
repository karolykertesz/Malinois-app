import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule,TypeOrmModule.forRoot({
    type: "postgres",
    synchronize:true,
    autoLoadEntities:true,
    host: "ec2-54-76-249-45.eu-west-1.compute.amazonaws.com" 
    ,
    port: 5432,
    username: "mplghqvdcfoegq",
    password: "8fc28c0ee2c8203bcf271685c8b7b6b1b8e9fe318640c713de2ba838d647224b",
    database: "d2mjs9989fj9k0",

  },)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
