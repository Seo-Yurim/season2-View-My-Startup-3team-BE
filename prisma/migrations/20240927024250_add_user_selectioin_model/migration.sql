/*
  Warnings:

  - You are about to drop the column `isSelected` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `selectedAt` on the `Startup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "isSelected",
DROP COLUMN "selectedAt";

-- CreateTable
CREATE TABLE "UserSelection" (
    "id" SERIAL NOT NULL,
    "userCookie" TEXT NOT NULL,
    "selectedAt" TIMESTAMP(3),
    "isSelected" BOOLEAN NOT NULL DEFAULT false,
    "startupId" INTEGER NOT NULL,

    CONSTRAINT "UserSelection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSelection" ADD CONSTRAINT "UserSelection_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
