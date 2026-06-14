import { PrismaClient } from "@prisma/client/extension";
import type {
  CreateUserInput,
  UpdateUserInput,
  User,
} from "../types/user.types";

const prisma = new PrismaClient();

export const UserService = {
  async createUser(data: CreateUserInput): Promise<User> {
    return prisma.user.create({ data });
  },

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    return prisma.user.update({
      data,
      where: { id },
    });
  },
};
