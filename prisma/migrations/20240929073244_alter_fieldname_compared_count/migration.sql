/*
  Warnings:

  - You are about to drop the column `compraredCount` on the `Startup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "compraredCount",
ADD COLUMN     "comparedCount" INTEGER NOT NULL DEFAULT 0;
