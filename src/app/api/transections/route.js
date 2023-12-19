import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'


export async function POST(req, res) {
  
  try {

    const prisma = new PrismaClient()
    const reqBody = await req.json();
      const transection = await prisma.transections.create({
          data: reqBody
        })
  
       return NextResponse.json({status:"success", data:transection})
  }
  catch (e){
      return NextResponse.json({status:"fail", data:e})
  }
}

