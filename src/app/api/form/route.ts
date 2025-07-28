import { NextRequest, NextResponse } from 'next/server';
// از نمونه‌ی مرکزی پریزما که ساختیم استفاده می‌کنیم
import prisma from '@/lib/prisma';

// تابع برای دریافت تمام پیام‌ها (GET)
export async function GET() {
  try {
    const messages = await prisma.formRequest.findMany({
      orderBy: {
        createdAt: 'desc', // مرتب‌سازی بر اساس تاریخ، جدیدترین‌ها اول
      },
    });
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return NextResponse.json({ error: 'Failed to fetch messages.' }, { status: 500 });
  }
}

// تابع برای ثبت پیام جدید (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    
    const newEntry = await prisma.formRequest.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, data: newEntry });
  } catch (error) {
    console.error("ERROR SAVING TO DB:", error);
    return NextResponse.json({ error: 'Failed to submit form.' }, { status: 500 });
  }
}
