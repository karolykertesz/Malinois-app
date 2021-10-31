import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';
export class CreateAuthDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly surname: string;
  @IsNumber()
  readonly areaCode: number;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly country: string;
  @IsString()
  readonly city: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly profile: string;
  @IsString()
  @IsOptional()
  readonly photo_url?: string;
}
