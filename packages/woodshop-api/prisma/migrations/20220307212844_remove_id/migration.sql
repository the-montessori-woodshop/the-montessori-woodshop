/*
  Warnings:

  - The primary key for the `Log` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Log` table. All the data in the column will be lost.
  - Added the required column `id` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" DROP CONSTRAINT "Log_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Log_pkey" PRIMARY KEY ("id");
