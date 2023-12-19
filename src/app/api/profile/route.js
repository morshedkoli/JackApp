import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'


export async function POST(req, res) {
  
  try {

    const prisma = new PrismaClient()
    const reqBody = await req.json();
      const profile = await prisma.profiles.create({
          data: reqBody
        })
  
       return NextResponse.json({status:"success", data:profile})
  }
  catch (e){
      return NextResponse.json({status:"fail", data:e.toString()})
  }
}

