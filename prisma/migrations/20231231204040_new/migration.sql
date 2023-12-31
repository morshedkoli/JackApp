/*
  Warnings:

  - Added the required column `otp` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `credit_balance` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `otp` VARCHAR(191) NOT NULL,
    ALTER COLUMN `balance` DROP DEFAULT,
    MODIFY `credit_balance` INTEGER NOT NULL;
