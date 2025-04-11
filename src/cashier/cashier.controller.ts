import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CashierService } from './cashier.service';
import { CreateCashierDto } from './create-cashier.dto';

@Controller('cashiers')
export class CashierController {
  constructor(private readonly cashierService: CashierService) {}

  @Get()
  findAll() {
    return this.cashierService.findAll();
  }

  @Post()
  create(@Body() body: CreateCashierDto) {
    return this.cashierService.create(body);
  }

  @Get(':code')
  findByCode(@Param('code') code: string) {
    return this.cashierService.findByCode(code);
  }

  @Put(':code')
  updateByCode(@Param('code') code: string, @Body() body: CreateCashierDto) {
    return this.cashierService.updateByCode(code, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cashierService.delete(+id);
  }
}
