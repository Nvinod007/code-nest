import express from "express";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const user = async () =>
  await prisma.user.findMany({
    cacheStrategy: { ttl: 60 },
    where: {
      email: {
        contains: "alice@prisma.io",
      },
    },
  });

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

app.listen(port, host, () => {
  console.info(`[ ready ] http://${host}:${port}`);
});
