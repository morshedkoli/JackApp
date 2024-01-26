import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Create a single global instance of PrismaClient
const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    // Fetch transactions that are not pending, with included user data
    const transactions = await prisma.transaction.findMany({
      where: {
        status: {
          not: 'pending',
        },
      },
      include: { user: true },
    });

    return NextResponse.json({ status: "success", data: transactions });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "fail", error: error.message });
  } finally {
    // Ensure Prisma client is always closed to release database connections
    await prisma.$disconnect();
  }
}
