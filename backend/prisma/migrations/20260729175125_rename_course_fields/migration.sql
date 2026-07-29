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
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "new_Course" (
    "id", "title", "description", "instituteName", "instituteLogo", "image", "readTime", 
    "campus", "createdAt", "updatedAt",
    "modality", "duration", "shift", "degree"
) 
SELECT 
    "id", 
    COALESCE("title", "titulo"),
    "description", "instituteName", "instituteLogo", "image", "readTime", 
    "campus", "createdAt", "createdAt",
    "modalidade", "duracao", "turno", 'Não informado'
FROM "Course";

DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";

CREATE TABLE "new_Edital" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publishAt" TEXT NOT NULL,
    "courseId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Edital_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO "new_Edital" ("id", "title", "content", "createdAt", "publishAt") 
SELECT "id", "title", "content", "createdAt", COALESCE("time", '') FROM "Edital";

DROP TABLE "Edital";
ALTER TABLE "new_Edital" RENAME TO "Edital";

CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "correctAnswerIndex" INTEGER NOT NULL,
    "examId" INTEGER NOT NULL,
    CONSTRAINT "Question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("correctAnswerIndex", "examId", "id", "options", "text") 
SELECT "correctAnswerIndex", "examId", "id", "options", "text" FROM "Question";

DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;