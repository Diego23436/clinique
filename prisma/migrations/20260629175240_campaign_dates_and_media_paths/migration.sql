/*
  Warnings:

  - You are about to drop the column `name` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `featuredImage` on the `blogarticle` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `campaign` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `campaign` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `campaign` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `gallery` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `quote` on the `testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `testimonial` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filePath` to the `Gallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientname` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin` DROP COLUMN `name`,
    ADD COLUMN `fullname` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `blogarticle` DROP COLUMN `featuredImage`,
    ADD COLUMN `featuredImagePath` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `campaign` DROP COLUMN `active`,
    DROP COLUMN `image`,
    DROP COLUMN `link`,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `imagePath` VARCHAR(500) NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `gallery` DROP COLUMN `file`,
    ADD COLUMN `filePath` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `testimonial` DROP COLUMN `name`,
    DROP COLUMN `quote`,
    DROP COLUMN `role`,
    ADD COLUMN `message` TEXT NOT NULL,
    ADD COLUMN `patientname` VARCHAR(255) NOT NULL;
