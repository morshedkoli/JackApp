import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Create a single global instance of PrismaClient
const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    // Fetch all users
    const users = await prisma.user.findMany(); // Use singular "user" for consistency

    return NextResponse.json({ status: "success", data: users });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ status: "fail", error: error.message }); // Share only the error message
  } finally {
    // Ensure Prisma client is always closed to release database connections
    await prisma.$disconnect();
  }
}
