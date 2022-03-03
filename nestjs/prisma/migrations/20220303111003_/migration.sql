/*
  Warnings:

  - You are about to drop the column `carbs` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `fat` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `protein` on the `FoodItem` table. All the data in the column will be lost.
  - Added the required column `amount` to the `FoodItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FoodItem" DROP CONSTRAINT "FoodItem_mealId_fkey";

-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "carbs",
DROP COLUMN "fat",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "protein",
ADD COLUMN     "amount" TEXT NOT NULL,
ADD COLUMN     "foodId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "Food" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "carbs" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FoodItemToMeal" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FoodItemToMeal_AB_unique" ON "_FoodItemToMeal"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodItemToMeal_B_index" ON "_FoodItemToMeal"("B");

-- AddForeignKey
ALTER TABLE "FoodItem" ADD CONSTRAINT "FoodItem_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodItemToMeal" ADD FOREIGN KEY ("A") REFERENCES "FoodItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodItemToMeal" ADD FOREIGN KEY ("B") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
