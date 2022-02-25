-- CreateEnum
CREATE TYPE "NOTIFICATION_TYPE" AS ENUM ('NEW_MESSAGE', 'INVITE_ACCEPTED', 'NEW_DOCUMENT');

-- CreateTable
CREATE TABLE "Notifications" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" "NOTIFICATION_TYPE" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
