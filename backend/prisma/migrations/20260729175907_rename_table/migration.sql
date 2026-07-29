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
    "modality" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "shift" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Course" ("campus", "createdAt", "degree", "description", "duration", "id", "image", "instituteLogo", "instituteName", "modality", "readTime", "shift", "title", "updatedAt") SELECT "campus", "createdAt", "degree", "description", "duration", "id", "image", "instituteLogo", "instituteName", "modality", "readTime", "shift", "title", "updatedAt" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
