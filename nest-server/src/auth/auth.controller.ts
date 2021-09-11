import { Controller,Get,Post,Param, Body, Patch } from '@nestjs/common';
import { CreateAuthDto } from 'src/dtos/create.auth.dto';
import { UpdateAuthDTO } from 'src/dtos/update.auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService ){
  }

@Get(":id")
getUserInfo(@Param("id") id: string){
  return this.authservice.findUser(id)
}
@Post()
createUser(@Body() body: CreateAuthDto){
  return this.authservice.saveUser(body)
}
@Patch(":id")
updateUser(@Param("id") id :string ,@Body() body: UpdateAuthDTO ){
  return this.authservice.updateUser(id,body)
}  
}
