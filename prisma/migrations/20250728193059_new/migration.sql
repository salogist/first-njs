/*
  Warnings:

  - You are about to drop the column `submittedAt` on the `FormRequest` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_FormRequest" ("email", "id", "message", "name") SELECT "email", "id", "message", "name" FROM "FormRequest";
DROP TABLE "FormRequest";
ALTER TABLE "new_FormRequest" RENAME TO "FormRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
