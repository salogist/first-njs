import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// ... بقیه کد
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    await prisma.formRequest.create({
      data: { name, email, message },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    // این خط را اضافه کن تا خطای واقعی را ببینیم
    console.error("ERROR SAVING TO DB:", error); 
    return NextResponse.json({ error: 'Failed to submit form.' }, { status: 500 });
  }
}