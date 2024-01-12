/*
  Warnings:

  - Added the required column `reference` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `reference` VARCHAR(191) NOT NULL,
    ADD COLUMN `userType` ENUM('Admin', 'SuperAdmin', 'user') NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
