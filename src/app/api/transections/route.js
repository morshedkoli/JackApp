import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  try {
    let headerList = headers();
    let userID = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    reqBody.userId = parseInt(userID);
    const user = await prisma.users.findUnique({
      where: { id: userID },
    });

    if (user.balance >= parseInt(reqBody.amount)) {
      await prisma.users.update({
        where: { id: userID },
        data: { balance: user.balance - parseInt(reqBody.amount) },
      });
      const transection = await prisma.transections.create({
        data: reqBody,
      });
      return NextResponse.json({ status: "success", data: transection });
    } else {
      return NextResponse.json({ status: "Fail", data: "Insuficent Balance" });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function GET(req, res) {
  const prisma = new PrismaClient();

  // const reqBody = await req.json();
  // return NextResponse.json({status:"success", data:user})

  try {
    const data = await prisma.transections.findMany({
      include: { user: true },

      where: {
        status: {
          not: "pending",
        },
      },
    });
    return NextResponse.json({ status: "success", data: data });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
