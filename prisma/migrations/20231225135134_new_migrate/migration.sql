/*
  Warnings:

  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profiles` DROP FOREIGN KEY `Profiles_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `transections` DROP FOREIGN KEY `Transections_transection_id_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `balance` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `credit_balance` INTEGER NULL DEFAULT 0,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `profiles`;

-- CreateIndex
CREATE UNIQUE INDEX `Users_email_key` ON `Users`(`email`);

-- AddForeignKey
ALTER TABLE `Transections` ADD CONSTRAINT `Transections_transection_id_fkey` FOREIGN KEY (`transection_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
