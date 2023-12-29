import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'


export async function POST(req, res) {
  
  try {

    const reqBody = await req.json();

    
    const prisma = new PrismaClient()
      const singleUser = await prisma.users.findUnique({
        where:{username:reqBody.username} 
      })
  
if(singleUser.length===0){
  const user = await prisma.users.create({
    data: reqBody
  })

 return NextResponse.json({status:"success", data:user})
}else{
  return NextResponse.json({status:"usermatch", data:singleUser})

}
     
  }
  catch (e){
      return NextResponse.json({status:"fail", data:e})
  }
}

