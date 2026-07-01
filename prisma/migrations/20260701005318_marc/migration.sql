/*
  Warnings:

  - You are about to drop the column `imagePath` on the `campaign` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `campaign` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `campaign` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - A unique constraint covering the columns `[slug]` on the table `Campaign` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `campaign` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `campaign` DROP COLUMN `imagePath`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `bannerUrl` VARCHAR(191) NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `description` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `MedicalService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `iconName` VARCHAR(191) NOT NULL,
    `shortDescription` TEXT NOT NULL,
    `fullDescription` TEXT NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `MedicalService_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pathology` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `symptoms` TEXT NOT NULL,
    `treatments` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pathology_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Campaign_slug_key` ON `Campaign`(`slug`);
