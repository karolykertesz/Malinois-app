import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Res,
  HttpStatus,
  Session,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateAuthDto } from 'src/dtos/create.auth.dto';
import { SignInDto } from 'src/dtos/singIn.dto';
import { UpdateAuthDTO } from 'src/dtos/update.auth.dto';
import { AuthService } from './auth.service';
import { ClientExposed } from 'src/dtos/clientExposed.dto';
import { Serialize } from 'src/interceptors/UserSerializeInerceptor';
@Controller('auth')
@Serialize(ClientExposed)
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Get('/:id')
  getUserInfo(@Param('id') id: string) {
    return this.authservice.findUser(id);
  }
  @Get('/ping')
  getPing(@Res() res: Response) {
    return res.status(HttpStatus.OK).json('Ok');
  }
  @Post('/signup')
  createUser(@Body() body: CreateAuthDto) {
    return this.authservice.saveUser(body);
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateAuthDTO) {
    return this.authservice.updateUser(id, body);
  }
  @Post('/signin')
  async signIn(
    @Res() res: Response,
    @Body() body: SignInDto,
    @Session() session: any,
  ): Promise<ClientExposed | any> {
    const user = await this.authservice.signIn(res, body);
    session.id = user.id;
    return user;
  }
}
