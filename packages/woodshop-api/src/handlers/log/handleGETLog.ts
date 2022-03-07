import { PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types";

const prisma = new PrismaClient({
  errorFormat: "pretty"
});

const handleGETLog: HandleGETRequest = async (request) => {
  await prisma.log.create({
    data: {
      level: "Info",
      message: `${request.method} ${request.url}`,
      meta: {
        headers: JSON.stringify(request.headers)
      }
    }
  });
  return new Response(`request method: ${request.method}!`);
};

export default handleGETLog;
