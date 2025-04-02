import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './transaction.interface';
import { CreateTransactionDto } from './create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel('Transaction') private readonly model: Model<Transaction>,
  ) {}

  async create(dto: CreateTransactionDto) {
    const created = new this.model(dto);
    return created.save();
  }

  async findAll() {
    return this.model.find().exec();
  }

  async createMany(dto: CreateTransactionDto[]): Promise<Transaction[]> {
    return this.model.insertMany(dto);
  }
}
