import { Document } from 'mongoose';

export interface Cashier extends Document {
  code: string;
  lastName: string;
  firstName: string;
  middleName: string;
  address: string;
  phone: string;
}
