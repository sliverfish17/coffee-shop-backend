import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CashierSchema } from './cashier.schema';
import { CashierService } from './cashier.service';
import { CashierController } from './cashier.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cashier', schema: CashierSchema }]),
  ],
  controllers: [CashierController],
  providers: [CashierService],
})
export class CashierModule {}
