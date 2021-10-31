import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Auth } from 'src/enteties/auth';
import { Product } from 'src/enteties/product.entity';
import { Message } from 'src/messages/message.entity';
import { CheckCookie } from 'src/middlewares/check-cookie';
import { CreateCookie } from 'src/middlewares/create-cookie';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, AuthService, CreateCookie, ConfigService],
  imports: [TypeOrmModule.forFeature([Product, Auth])],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckCookie)
      .forRoutes({ path: 'products', method: RequestMethod.ALL });
  }
}
