import { Prisma } from "../../generated/prisma";

// User type with all fields
type User = Prisma.UserGetPayload<object>;

// Custom type with selected fields
type UserProfile = Prisma.UserGetPayload<{
  select: {
    id: true;
    email: true;
    name: true;
    avatar: true;
    role: true;
  };
}>;

// Type for creating a user
type CreateUserInput = Prisma.UserCreateInput;

// Type for updating a user
type UpdateUserInput = Prisma.UserUpdateInput;

export type { User, UserProfile, CreateUserInput, UpdateUserInput };
