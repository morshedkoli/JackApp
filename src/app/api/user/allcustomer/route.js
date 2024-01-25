import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const prisma = new PrismaClient();

  // const reqBody = await req.json();
  // return NextResponse.json({status:"success", data:user})

  try {
    const data = await prisma.users.findMany();

    return NextResponse.json({ status: "success", data: data });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
