-- AlterTable
ALTER TABLE "users" ADD COLUMN     "last_logged_in" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;