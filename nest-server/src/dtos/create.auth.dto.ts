import { IsString,IsEmail, IsOptional } from "class-validator";
export class CreateAuthDto {
  @IsString()
  readonly name: string;
  @IsEmail()
  readonly email: string
  @IsString()
  readonly password: string
  @IsString()
  @IsOptional()
  readonly photo_url?: string
}
