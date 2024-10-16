/*
  Warnings:

  - You are about to drop the column `count` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the `UserSelection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserSelection" DROP CONSTRAINT "UserSelection_startupId_fkey";

-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "count",
ADD COLUMN     "comparedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "selectedCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "UserSelection";

-- CreateTable
CREATE TABLE "Selection" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL DEFAULT true,
    "startupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Selection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comparison" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "isCompared" BOOLEAN NOT NULL DEFAULT true,
    "startupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comparison_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Selection" ADD CONSTRAINT "Selection_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comparison" ADD CONSTRAINT "Comparison_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
