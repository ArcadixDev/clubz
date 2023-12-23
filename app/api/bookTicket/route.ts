import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Api post body ==>", body.email);
  const newBooking = await prisma.ticket.create({
    data:{
      clubId: "clqia0n2a000is4kqflboqik8",
      userId: "clqbttejx0000ll9wnjaduzwc",
      date: body.date,
      price: body.price,
      paymentStatus: body.paymentStatus,
    }
  });
  const res = await newBooking;
  return NextResponse.json({
    message: "Booking created successfully",
  });
}
