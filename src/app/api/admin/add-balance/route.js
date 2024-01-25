import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  try {
    let headerList = headers();
    let userId = parseInt(headerList.get("id"));
    const reqBody = await req.json();

    const user = await prisma.users.findUnique({ where: { id: userId } });

    if (user["isAdmin"] && user.balance >= reqBody.amount) {
      const prisma = new PrismaClient();
      const customer = await prisma.users.findUnique({
        where: { id: reqBody.id },
      });

      const newBalance = customer.balance + reqBody.amount;

      await prisma.users.update({
        where: { id: userId },
        data: { balance: user.balance - reqBody.amount },
      });

      const result = await prisma.users.update({
        where: { id: reqBody.id },
        data: { balance: newBalance },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
