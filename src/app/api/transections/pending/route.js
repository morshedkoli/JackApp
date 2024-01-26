import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Create a single global instance of PrismaClient
const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    // Fetch pending transactions with included user data
    const transactions = await prisma.transaction.findMany({
      where: { status: "pending" },
      include: { user: true },
    });

    // Return a successful response with the fetched transactions
    return NextResponse.json({ status: "success", data: transactions });
  } catch (error) {
    // Handle errors gracefully and log them for debugging
    console.error(error);
    return NextResponse.json({ status: "fail", error: error.message });
  } finally {
    // Ensure Prisma client is always closed to release database connections
    await prisma.$disconnect();
  }
}
