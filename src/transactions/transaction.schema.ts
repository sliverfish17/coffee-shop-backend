import { Schema } from 'mongoose';

export const TransactionSchema = new Schema({
  transactionCode: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: String, required: true },
});
