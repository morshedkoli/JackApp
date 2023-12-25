import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'


export async function GET(req, res) {
  
  // const reqBody = await req.json();
  // return NextResponse.json({status:"success", data:user})

  try {

    
    const prisma = new PrismaClient()
      const allusers = await prisma.users.findMany({
        orderBy:{
            balance: ASC
        },
        take:5,
        
      })
  
       return NextResponse.json({status:"success", data:allusers})
  }
  catch (e){
      return NextResponse.json({status:"fail", data:e})
  }
}

