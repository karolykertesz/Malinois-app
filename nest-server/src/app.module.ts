import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Auth } from './enteties/auth';

@Module({
  imports: [AuthModule,TypeOrmModule.forRoot({
    type: "postgres",
    name: "default",
    synchronize:true,
    autoLoadEntities:true,
    entities: [Auth],
    ssl:process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
    

    url: process.env.TYPE_ORM_POSTGRESS_URL,
    port: 5432,
  },)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
