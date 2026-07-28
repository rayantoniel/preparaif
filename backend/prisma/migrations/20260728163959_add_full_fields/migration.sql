/*
  Warnings:

  - You are about to drop the column `date` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Exam` table. All the data in the column will be lost.
  - Added the required column `campus` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duracao` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `edicts` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteLogo` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteName` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modalidade` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readTime` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turno` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Edital` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "correctAnswerIndex" INTEGER NOT NULL,
    "examId" INTEGER NOT NULL,
    CONSTRAINT "Question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL,
    "instituteLogo" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "readTime" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "turno" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "edicts" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Course" ("createdAt", "description", "id", "title") SELECT "createdAt", "description", "id", "title" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE TABLE "new_Edital" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Edital" ("content", "createdAt", "id", "title") SELECT "content", "createdAt", "id", "title" FROM "Edital";
DROP TABLE "Edital";
ALTER TABLE "new_Edital" RENAME TO "Edital";
CREATE TABLE "new_Exam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Exam" ("createdAt", "id") SELECT "createdAt", "id" FROM "Exam";
DROP TABLE "Exam";
ALTER TABLE "new_Exam" RENAME TO "Exam";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
