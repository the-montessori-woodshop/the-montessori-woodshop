import { PrismaClient } from "@prisma/client/edge";

export const prisma = new PrismaClient({
  errorFormat: "pretty"
  // log: [
  //   {
  //     emit: "stdout",
  //     level: "error"
  //   },
  //   {
  //     emit: "stdout",
  //     level: "info"
  //   },
  //   {
  //     emit: "stdout",
  //     level: "warn"
  //   }
  // ]
});
