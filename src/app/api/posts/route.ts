import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, slug, authorId } = await req.json();
    if (!title || !content || !slug || !authorId) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    const post = await prisma.post.create({
      data: { title, content, slug, authorId },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post.' }, { status: 500 });
  }
} 