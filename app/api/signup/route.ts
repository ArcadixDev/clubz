import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body.data;

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Missing name, email, or password" },
      {
        status: 400,
      },
    );
  }

  //   const exist = await db
  //     .selectFrom("User")
  //     .selectAll()
  //     .where("User.email", "=", email)
  //     .execute();
  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return NextResponse.json(
      { error: "User Already Exist", errorCode: "409" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  //   const user = await db
  //     .insertInto("User")
  //     .values({ name, email, password: hashedPassword });
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ data: user }, { status: 200 });
}
