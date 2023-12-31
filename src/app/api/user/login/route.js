import { CreateToken } from '@/utility/JWTTokenHelper';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    
    const result = await prisma.users.findMany({
      where: reqBody // Adjust the where clause based on the correct structure
    });
    // console.log(result)

    if (result.length === 0) {

      return NextResponse.json({ status: "fail", data: result });

    } else {
      
      const { username, password } = result[0]; // Extract username and password from the result
      const token = await CreateToken({ username, password }); // Adjust CreateToken arguments

      const expirDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expirDuration.toUTCString()}; path=/`;

      return NextResponse.json({ status: "success", data: token }, { status: 200, headers: { "Set-Cookie": cookieString } });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
