-- AlterTable
ALTER TABLE "user" ALTER COLUMN "roles" SET DEFAULT ARRAY['member']::TEXT[];
