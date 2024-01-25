import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  let headerList = headers();
  let userID = parseInt(headerList.get("id"));

  // const reqBody = await req.json();
  // return NextResponse.json({status:"success", data:user})
  try {
    const prisma = new PrismaClient();
    const data = await prisma.users.findUnique({
      where: { id: userID },
    });

    return NextResponse.json({
      status: "success",
      data: { balance: data["balance"], name: data["name"] },
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
