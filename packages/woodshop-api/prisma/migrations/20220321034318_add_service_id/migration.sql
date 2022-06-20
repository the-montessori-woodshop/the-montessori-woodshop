/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Image` table. All the data in the column will be lost.
  - Added the required column `service_id` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "service_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
