-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "cashierId" INTEGER;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_cashierId_fkey" FOREIGN KEY ("cashierId") REFERENCES "Cashier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
