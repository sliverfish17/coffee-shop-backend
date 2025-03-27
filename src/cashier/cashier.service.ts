import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCashierDto } from './create-cashier.dto';
import { Cashier } from './cashier.interface';

@Injectable()
export class CashierService {
  constructor(
    @InjectModel('Cashier') private readonly cashierModel: Model<Cashier>,
  ) {}

  async create(data: CreateCashierDto) {
    const cashier = new this.cashierModel(data);
    return cashier.save();
  }

  async findAll() {
    return this.cashierModel.find().exec();
  }

  async update(id: string, data: Cashier) {
    return this.cashierModel.findByIdAndUpdate(id, data, { new: true });
  }

  async findByCode(code: string): Promise<Cashier | null> {
    return this.cashierModel.findOne({ code }).exec();
  }

  async updateByCode(
    code: string,
    data: Partial<Cashier>,
  ): Promise<Cashier | null> {
    return this.cashierModel
      .findOneAndUpdate({ code }, data, { new: true })
      .exec();
  }

  async delete(id: string) {
    return this.cashierModel.findByIdAndDelete(id);
  }
}
