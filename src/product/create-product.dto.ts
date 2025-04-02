import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  code!: string;

  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber({}, { message: 'Ціна має бути числом' })
  price!: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
