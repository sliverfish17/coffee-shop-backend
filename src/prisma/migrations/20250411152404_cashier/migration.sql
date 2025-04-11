-- CreateTable
CREATE TABLE "Cashier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cashier_pkey" PRIMARY KEY ("id")
);
