import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthDto } from 'src/dtos/create.auth.dto';
import { Auth } from 'src/enteties/auth';
import { Repository } from 'typeorm';
import { UpdateAuthDTO } from 'src/dtos/update.auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Auth) private authRepo: Repository<Auth>){
    
  }

async saveUser(CreateAuthDto:any){
const user = await this.authRepo.create(CreateAuthDto);
return this.authRepo.save(user)
}
async findUser(id:string){
  const user = await this.authRepo.findOne({id:+id})
  if(!user){
    throw new NotFoundException("No User found with this id!!")
  }
  return user;
}
async updateUser(id:string,UpdateAuthDTO:any){
  const user = await this.authRepo.preload({id: +id,...UpdateAuthDTO});
  if(!user){
    throw new NotFoundException("No User found with this id!!")
  }
  return this.authRepo.save(user)
}
}
