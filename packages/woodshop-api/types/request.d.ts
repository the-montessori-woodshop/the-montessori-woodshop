import { User } from "@prisma/client";

declare global {
  interface Request {
    user?: User | null;
  }
}
