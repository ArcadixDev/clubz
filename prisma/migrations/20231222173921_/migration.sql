/*
  Warnings:

  - You are about to drop the column `alcohol` on the `Club` table. All the data in the column will be lost.
  - Changed the type of `paymentStatus` on the `Ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "alcohol",
ADD COLUMN     "minAge" INTEGER,
ADD COLUMN     "uniqueUrl" TEXT;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "paymentStatus",
ADD COLUMN     "paymentStatus" BOOLEAN NOT NULL;
