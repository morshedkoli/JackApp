-- AlterTable
ALTER TABLE `transections` ADD COLUMN `senderNumber` VARCHAR(191) NULL,
    ADD COLUMN `transectionId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL;
