import { IsString, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  transactionCode!: string;

  @IsString()
  productName!: string;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  price!: number;

  @IsString()
  date!: string;
}
