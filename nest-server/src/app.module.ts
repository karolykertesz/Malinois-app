import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Auth } from './enteties/auth';
import { ConfigModule } from '@nestjs/config';

import { MessagesModule } from './messages/messages.module';
import { CheckCookie } from './middlewares/check-cookie';
import { ProductsModule } from './products/products.module';
import { Message } from './messages/message.entity';
import { Product } from './enteties/product.entity';
import { Letters } from './enteties/letters.dto';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      synchronize: true,
      autoLoadEntities: true,
      entities: [Auth, Message, Product, Letters],
      password: 'pass123',
      database: 'mali',
      port: 5432,
    }),
    MessagesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckCookie)
      .forRoutes({ path: 'messages', method: RequestMethod.ALL });
  }
}
