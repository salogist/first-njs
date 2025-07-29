import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import slugify from 'slugify';

// Schema for validating post creation data, now with all new fields
const createPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  authorId: z.number().int(),
  published: z.boolean().optional().default(false),
  excerpt: z.string().optional(),
  // *** CHANGE IS HERE: We remove .url() to allow relative paths ***
  imageUrl: z.string().optional().nullable(),
  categoryId: z.number().int().nullable().optional(),
});

// --- GET: Fetch all posts ---
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
        category: { // Include category information
          select: {
            name: true,
            slug: true,
          }
        }
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json({ error: 'Failed to fetch posts.' }, { status: 500 });
  }
}

// --- POST: Create a new post ---
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input against the new, more complete schema
    const validation = createPostSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.flatten() }, { status: 400 });
    }

    const { title, content, slug: rawSlug, authorId, published, excerpt, imageUrl, categoryId } = validation.data;

    // Sanitize the user-provided slug
    const slug = slugify(rawSlug, { lower: true, strict: true, trim: true });

    // Check if a post with this slug already exists
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      return NextResponse.json({ error: 'A post with this slug already exists. Please choose a unique slug.' }, { status: 409 });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        authorId,
        published,
        excerpt,
        imageUrl,
        categoryId,
      },
    });

    return NextResponse.json(newPost, { status: 201 });

  } catch (error) {
    console.error("ERROR CREATING POST:", error);
    return NextResponse.json({ error: 'Failed to create post.' }, { status: 500 });
  }
}
