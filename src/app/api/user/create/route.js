import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'


export async function POST(req, res) {
  
  try {

    const reqBody = await req.json();

    
    const prisma = new PrismaClient()
      const singleUser = await prisma.users.findMany({
        where:{username:reqBody.username} 
      })

  
if(singleUser.length===1){
  return NextResponse.json({status:"usermatch", data: singleUser})

}else{

  const user = await prisma.users.create({
    data: reqBody
  })

 return NextResponse.json({status:"success", data:user})
}
     
  }
  catch (e){

      return NextResponse.json({status:"fail", data:e})
  }
}

