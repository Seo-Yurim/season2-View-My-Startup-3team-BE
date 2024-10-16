-- CreateTable
CREATE TABLE "MockInvestor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startupId" INTEGER NOT NULL,
    "investAmount" INTEGER NOT NULL DEFAULT 0,
    "comment" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MockInvestor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MockInvestor" ADD CONSTRAINT "MockInvestor_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
