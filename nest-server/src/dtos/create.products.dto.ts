import {
  IsString,
  IsNumber,
  IsDate,
  IsBoolean,
  IsOptional,
  Max,
  Min,
  IsEmail,
} from 'class-validator';
export class CreateProductsDto {
  @IsString()
  added_by: string;
  @IsDate()
  auction_starts: Date;
  @IsNumber()
  quantity: number;
  @IsDate()
  auction_ends: Date;
  @IsBoolean()
  garantie: boolean;
  @IsString()
  location: string;
  @IsString()
  payment_type: string;
  @IsEmail()
  user_email: string;
  @IsOptional()
  image_urls: string[];
  @IsString()
  @Min(6)
  @Max(200)
  description: string;
}
