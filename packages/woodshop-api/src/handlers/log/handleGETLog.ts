import { PrismaClient } from "@prisma/client";

import { HandleGETRequest } from "../../types";

const handleGETLog: HandleGETRequest = async (request) => {
  const prisma = new PrismaClient({
    errorFormat: "pretty"
  });

  await prisma.log.create({
    data: {
      level: "Info",
      id: "c5711185-47f2-52d2-b72d-7956a7c9ef51",
      message: `${request.method} ${request.url}`,
      meta: {
        headers: JSON.stringify(request.headers)
      }
    }
  });
  return new Response(`request method: ${request.method}!`);
};

export default handleGETLog;
