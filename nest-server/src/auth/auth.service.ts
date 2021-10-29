import {
  HttpStatus,
  Injectable,
  NotFoundException,
  Scope,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthDto } from 'src/dtos/create.auth.dto';
import { Auth } from 'src/enteties/auth';
import { Repository, Connection } from 'typeorm';
import { UpdateAuthDTO } from 'src/dtos/update.auth.dto';
import { ConfigService } from '@nestjs/config';
import { CreateCookie } from 'src/middlewares/create-cookie';

@Injectable({ scope: Scope.DEFAULT })
export class AuthService {
  constructor(
    @InjectRepository(Auth) private authRepo: Repository<Auth>,
    private readonly configService: ConfigService,
    private readonly createCookie: CreateCookie,
    private readonly consfigService: ConfigService,
  ) {
    // const r = this.configService.get<string>("JWT_TOKEN_SECRET")
    // console.log(r)
  }

  async saveUser(CreateAuthDto: any) {
    const exUser = '';
    const user = await this.authRepo.create(CreateAuthDto);
    return this.authRepo.save(user);
  }
  async findUser(id: string) {
    const user = await this.authRepo.findOne({ id: +id });
    if (!user) {
      throw new NotFoundException('No User found with this id!!');
    }
    return user;
  }
  async findUserBuMail(email: string) {
    const user = await this.authRepo.findOne({ email });
    if (!user) {
      throw new NotFoundException('No User found with this id!!');
    }
    return user;
  }
  async updateUser(id: string, UpdateAuthDTO: any) {
    const user = await this.authRepo.preload({ id: +id, ...UpdateAuthDTO });
    if (!user) {
      throw new NotFoundException('No User found with this id!!');
    }
    return this.authRepo.save(user);
  }
  async signIn(res, body) {
    const { id } = body;
    const secret = this.consfigService.get<string>('JWT_TOKEN_SECRET');
    const token = await this.createCookie.create(res, id, secret);
    return res.status(200);
  }
}
