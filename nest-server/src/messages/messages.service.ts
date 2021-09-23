import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from 'src/enteties/auth';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Auth) private authRepo: Repository<Auth>) {}
}
