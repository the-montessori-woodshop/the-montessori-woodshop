import { PrismaClient } from "@prisma/client";

export const initPrisma = async () => {
  const prisma = new PrismaClient({
    errorFormat: "pretty",
    log: [
      {
        emit: "stdout",
        level: "query"
      },
      {
        emit: "stdout",
        level: "error"
      },
      {
        emit: "stdout",
        level: "info"
      },
      {
        emit: "stdout",
        level: "warn"
      }
    ]
  });
  await prisma.$connect();
  return prisma;
};
