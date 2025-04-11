import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.transaction.findMany();
  }

  createMany(dto: CreateTransactionDto[]) {
    return this.prisma.transaction.createMany({
      data: dto,
    });
  }
}
