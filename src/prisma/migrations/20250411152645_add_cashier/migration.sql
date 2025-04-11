/*
  Warnings:

  - You are about to drop the column `name` on the `Cashier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Cashier` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Cashier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Cashier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Cashier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Cashier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `Cashier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Cashier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cashier" DROP COLUMN "name",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "middleName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cashier_code_key" ON "Cashier"("code");
