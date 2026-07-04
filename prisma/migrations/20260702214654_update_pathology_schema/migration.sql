/*
  Warnings:

  - You are about to drop the `medicalservice` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviceId` to the `Pathology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pathology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pathology` ADD COLUMN `causes` LONGTEXT NULL,
    ADD COLUMN `complications` LONGTEXT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `preventionTips` LONGTEXT NULL,
    ADD COLUMN `riskFactors` LONGTEXT NULL,
    ADD COLUMN `serviceId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `slug` VARCHAR(255) NOT NULL,
    MODIFY `description` LONGTEXT NOT NULL,
    MODIFY `symptoms` LONGTEXT NOT NULL,
    MODIFY `treatments` LONGTEXT NOT NULL;

-- DropTable
DROP TABLE `medicalservice`;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `icon` VARCHAR(500) NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Service_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PathologyMedia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pathologyId` INTEGER NOT NULL,
    `type` ENUM('IMAGE', 'VIDEO') NOT NULL,
    `filePath` VARCHAR(500) NOT NULL,
    `title` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `displayOrder` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PathologyMedia_pathologyId_idx`(`pathologyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Pathology_serviceId_idx` ON `Pathology`(`serviceId`);

-- CreateIndex
CREATE INDEX `Pathology_slug_idx` ON `Pathology`(`slug`);

-- AddForeignKey
ALTER TABLE `Pathology` ADD CONSTRAINT `Pathology_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PathologyMedia` ADD CONSTRAINT `PathologyMedia_pathologyId_fkey` FOREIGN KEY (`pathologyId`) REFERENCES `Pathology`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
