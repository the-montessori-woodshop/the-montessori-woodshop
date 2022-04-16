/*
  Warnings:

  - Added the required column `banner_img_url` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_published` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prompt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_img_url` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "banner_img_url" TEXT NOT NULL,
ADD COLUMN     "date_published" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "prompt" TEXT NOT NULL,
ADD COLUMN     "thumbnail_img_url" TEXT NOT NULL;
