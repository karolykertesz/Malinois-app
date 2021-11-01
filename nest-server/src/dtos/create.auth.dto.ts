import {
  IsString,
  IsEmail,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
export class CreateAuthDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly surname: string;
  @IsNumber()
  readonly area_code: number;
  @IsEmail()
  readonly email: string;
  @IsString()
  street: string;
  @IsString()
  appartment: string;
  @IsString()
  readonly country: string;
  @IsString()
  readonly city: string;
  @IsString()
  readonly phone: string;
  @IsString()
  @Min(3)
  @Max(20)
  readonly display_name: string;
  @IsString()
  @IsOptional()
  readonly photo_url?: string;
}
