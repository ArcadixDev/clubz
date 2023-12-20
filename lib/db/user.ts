import { User } from "@prisma/client";
import prisma from "../prisma";

export const getUserRole = async (email: User["email"]) => {
  if (!email) {
    return "Role is not found for an invalid email";
  }
  const data = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (data) {
    return data.role;
  } else {
    return "No user found.";
  }
};
