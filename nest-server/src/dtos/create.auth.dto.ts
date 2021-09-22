import { IsString,IsEmail, isString } from "class-validator";
export class CreateAuthDto {
  @IsString()
  readonly name: string;
  @IsEmail()
  readonly email: string
  @IsString()
  readonly password: string
  @IsString()
  readonly photo_url?: string
}
