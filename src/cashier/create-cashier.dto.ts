import { IsString } from 'class-validator';

export class CreateCashierDto {
  @IsString()
  code!: string;

  @IsString()
  lastName!: string;

  @IsString()
  firstName!: string;

  @IsString()
  middleName!: string;

  @IsString()
  address!: string;

  @IsString()
  phone!: string;
}
