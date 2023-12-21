import { User } from "@prisma/client";
import prisma from "../prisma";

export const getUserRole = async (
  email: User["email"],
): Promise<"user" | "club" | null> => {
  if (!email) {
    return null;
  }
  const data = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (data) {
    return data.role === "club" ? "club" : "user";
  } else {
    return null;
  }
};
