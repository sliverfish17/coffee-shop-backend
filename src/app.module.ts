import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashierModule } from './cashier/cashier.module';
import { AuthController } from './auth/auth.controller';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),

    MulterModule.register({
      dest: './uploads',
    }),

    ConfigModule.forRoot({ isGlobal: true }),
    CashierModule,
    ProductModule,
    TransactionModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
