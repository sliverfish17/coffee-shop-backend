import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCashierDto } from './create-cashier.dto';

@Injectable()
export class CashierService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.cashier.findMany();
  }

  create(data: CreateCashierDto) {
    return this.prisma.cashier.create({
      data: {
        code: String(data.code),
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        address: data.address,
        phone: data.phone,
      },
    });
  }

  findByCode(code: string) {
    return this.prisma.cashier.findUnique({
      where: { code },
    });
  }

  updateByCode(code: string, data: CreateCashierDto) {
    return this.prisma.cashier.update({
      where: { code },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.cashier.delete({
      where: { id },
    });
  }
}
