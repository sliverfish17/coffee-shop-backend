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
    return this.prisma.transaction.findMany({
      include: {
        cashier: true,
      },
    });
  }

  createMany(dto: CreateTransactionDto[]) {
    return Promise.all(
      dto.map((data) => {
        if (!data.cashierId) {
          throw new Error('Missing cashierId in transaction payload');
        }

        return this.prisma.transaction.create({
          data: {
            transactionCode: data.transactionCode,
            productName: data.productName,
            quantity: data.quantity,
            price: data.price,
            date: data.date,
            cashier: {
              connect: { id: data.cashierId },
            },
          },
        });
      }),
    );
  }
}
