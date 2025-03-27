import { Schema } from 'mongoose';

export const CashierSchema = new Schema({
  code: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});
