import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST() {
  const newBooking = await prisma.club.create({
    data:{
      name: "Red Lagoon",
      description: "",
      websiteUrl: "",
      uniqueUrl: "redlagoon",
      phone: "8888888888",
      availableTickets: 100,
      minAge: 18,
      ticketPrice: 100,
      openingHours: {
        "weekdays": "10:00 - 22:00",
        "weekends": "10:00 - 23:00"
      },
    }
  });
  const res = await newBooking;
  return NextResponse.json({
    message: "Club added Successfully",
    status: 200,
    data: res,
  });
}
