import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CashierService } from './cashier.service';
import { CreateCashierDto } from './create-cashier.dto';

@Controller('cashiers')
export class CashierController {
  constructor(private readonly cashierService: CashierService) {}

  @Post()
  create(@Body() body: CreateCashierDto) {
    return this.cashierService.create(body);
  }

  @Get(':code')
  findByCode(@Param('code') code: string) {
    return this.cashierService.findByCode(code);
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() body: CreateCashierDto) {
    return this.cashierService.updateByCode(code, body);
  }

  @Get()
  findAll() {
    return this.cashierService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cashierService.delete(id);
  }
}
