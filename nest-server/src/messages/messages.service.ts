import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from 'src/enteties/auth';
import { ConfigService } from '@nestjs/config';
import { Message } from './message.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable({ scope: Scope.REQUEST })
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepo: Repository<Message>,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}
}
