/*
  Warnings:

  - You are about to drop the column `transection_id` on the `transections` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Transections` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `transections` DROP FOREIGN KEY `Transections_transection_id_fkey`;

-- AlterTable
ALTER TABLE `transections` DROP COLUMN `transection_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Transections` ADD CONSTRAINT `Transections_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
