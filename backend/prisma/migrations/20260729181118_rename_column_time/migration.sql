/*
  Warnings:

  - You are about to alter the column `publishAt` on the `Edital` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - Added the required column `time` to the `Edital` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Edital" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "courseId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Edital_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Edital" ("id", "title", "content", "courseId", "createdAt", "time", "publishAt") 
SELECT 
    "id", 
    "title", 
    "content", 
    "courseId", 
    "createdAt", 
    "publishAt",
    CURRENT_TIMESTAMP
FROM "Edital";
DROP TABLE "Edital";
ALTER TABLE "new_Edital" RENAME TO "Edital";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
