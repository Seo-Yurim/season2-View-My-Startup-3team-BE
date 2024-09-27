/*
  Warnings:

  - You are about to drop the `UserSelection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserSelection" DROP CONSTRAINT "UserSelection_startupId_fkey";

-- DropTable
DROP TABLE "UserSelection";

-- CreateTable
CREATE TABLE "Selection" (
    "id" SERIAL NOT NULL,
    "userCookie" TEXT NOT NULL,
    "selectedAt" TIMESTAMP(3),
    "isSelected" BOOLEAN NOT NULL DEFAULT false,
    "startupId" INTEGER NOT NULL,

    CONSTRAINT "Selection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Selection" ADD CONSTRAINT "Selection_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
