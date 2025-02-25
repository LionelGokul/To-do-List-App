import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  try {
    global.__db = new PrismaClient();
  } catch (e) {
    console.error(e);
  }
}

db = global.__db || new PrismaClient();

export { db };
