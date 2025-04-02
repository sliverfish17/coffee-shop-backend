import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './create-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() transactions: CreateTransactionDto[]) {
    return this.transactionService.createMany(transactions);
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }
}
