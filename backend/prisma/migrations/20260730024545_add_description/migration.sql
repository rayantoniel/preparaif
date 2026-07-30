-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Edital" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL,
    "instituteLogo" TEXT,
    "courseId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Edital_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Edital" ("content", "courseId", "createdAt", "description", "id", "instituteLogo", "instituteName", "publishAt", "time", "title") SELECT "content", "courseId", "createdAt", "description", "id", "instituteLogo", "instituteName", "publishAt", "time", "title" FROM "Edital";
DROP TABLE "Edital";
ALTER TABLE "new_Edital" RENAME TO "Edital";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
