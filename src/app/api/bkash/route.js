
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
  
    // const reqBody = await req.json();
    // return NextResponse.json({status:"success", data:user})
  
    try {
  
    const reqBody = await req.json();
    return NextResponse.json({status:"success", data:user})
    
         return NextResponse.json({status:"success", data:data})
    }
    catch (e){
        return NextResponse.json({status:"fail", data:e})
    }
  }
  






