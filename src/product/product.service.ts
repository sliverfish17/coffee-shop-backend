import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.interface';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(data: CreateProductDto) {
    const created = new this.productModel(data);
    return await created.save();
  }

  async findAll() {
    return this.productModel.find().exec();
  }

  async findByCode(code: string) {
    return this.productModel.findOne({ code }).exec();
  }

  async updateByCode(code: string, data: Partial<Product>) {
    return this.productModel
      .findOneAndUpdate({ code }, data, { new: true })
      .exec();
  }
}
