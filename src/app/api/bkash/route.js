// import { Prisma, PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// export async function GET(req, res) {
//   // const reqBody = await req.json();
//   // return NextResponse.json({status:"success", data:user})

//   try {
//     let headerList = headers();
//     let id = parseInt(headerList.get("id"));
//     const reqBody = await req.json();
//     const prisma = await PrismaClient()

//     const user = await prisma.transections.create(

//     )
//     return NextResponse.json({ status: "success", data: user });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }
