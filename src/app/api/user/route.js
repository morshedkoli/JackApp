import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req, res) {
    const user = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alicex2@prisma.io',
        },
      })

     return NextResponse.json({status:"success", data:user})
}

