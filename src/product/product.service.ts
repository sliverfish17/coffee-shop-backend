import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({
      data,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, dto: CreateProductDto) {
    return this.prisma.product.update({ where: { id }, data: dto });
  }

  findByCode(code: string) {
    return this.prisma.product.findUnique({
      where: { code },
    });
  }

  updateByCode(code: string, data: CreateProductDto) {
    return this.prisma.product.update({
      where: { code },
      data,
    });
  }

  removeByCode(code: string) {
    return this.prisma.product.delete({
      where: { code },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
