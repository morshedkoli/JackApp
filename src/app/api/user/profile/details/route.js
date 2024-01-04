import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SendEmail } from "@/utility/EmailUtility";
import { headers } from "../../../../../../next.config";

export async function GET(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({ where: { id: id } });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
