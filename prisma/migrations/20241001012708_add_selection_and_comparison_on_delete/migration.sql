-- DropForeignKey
ALTER TABLE "Comparison" DROP CONSTRAINT "Comparison_startupId_fkey";

-- DropForeignKey
ALTER TABLE "Selection" DROP CONSTRAINT "Selection_startupId_fkey";

-- AddForeignKey
ALTER TABLE "Selection" ADD CONSTRAINT "Selection_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comparison" ADD CONSTRAINT "Comparison_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
