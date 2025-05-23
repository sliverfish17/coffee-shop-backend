import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  transactionCode!: string;

  @IsString()
  productName!: string;

  @IsInt()
  quantity!: number;

  @IsNumber()
  price!: number;

  @IsInt()
  cashierId!: number;

  @IsString()
  date!: string;
}
