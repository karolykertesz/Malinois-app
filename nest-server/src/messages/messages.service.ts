import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from 'src/enteties/auth';
import { ConfigService } from '@nestjs/config';

@Injectable({scope: Scope.REQUEST})
export class MessagesService {
  constructor(@InjectRepository(Auth) private authRepo: Repository<Auth>,
  private readonly configService: ConfigService
  ){

  }
  
}
