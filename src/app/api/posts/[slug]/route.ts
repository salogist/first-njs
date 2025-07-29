import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import slugify from 'slugify';

interface Params {
  params: {
    slug: string;
  };
}

// --- GET: Fetch a single post by slug (No changes here) ---
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
      include: {
        author: {
          select: { name: true, email: true },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`Failed to fetch post with slug ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// --- PUT: Update a post by slug ---
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const body = await request.json();
    const { title, content, published, slug: newRawSlug } = body;

    const dataToUpdate: {
      title?: string;
      content?: string;
      published?: boolean;
      slug?: string;
    } = {};

    if (title) dataToUpdate.title = title;
    if (content) dataToUpdate.content = content;
    if (published !== undefined) dataToUpdate.published = published;
    
    // If a new slug is provided, sanitize it and add to the update object
    if (newRawSlug) {
      dataToUpdate.slug = slugify(newRawSlug, {
        lower: true,
        strict: true,
        trim: true,
      });
    }

    const updatedPost = await prisma.post.update({
      where: { slug: params.slug },
      data: dataToUpdate,
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    // This can fail if the new slug already exists
    if (error instanceof Error && 'code' in error && (error as any).code === 'P2002') {
      return NextResponse.json({ error: 'The new slug is already in use.' }, { status: 409 });
    }
    console.error(`Failed to update post with slug ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// --- DELETE: Delete a post by slug (No changes here) ---
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    await prisma.post.delete({
      where: { slug: params.slug },
    });

    return new NextResponse(null, { status: 204 }); // 204 No Content
  } catch (error) {
    console.error(`Failed to delete post with slug ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
