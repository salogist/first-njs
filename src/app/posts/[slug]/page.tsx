import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// تابع برای خواندن یک مقاله خاص از دیتابیس
async function getPost(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug, published: true }, // فقط اگر منتشر شده باشد
    include: {
      author: { select: { name: true } },
      category: { select: { name: true, slug: true } },
    },
  });

  if (!post) {
    notFound(); // اگر پست پیدا نشد، صفحه 404 نمایش داده می‌شود
  }
  return post;
}

// کامپوننت صفحه نمایش مقاله
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {post.category && (
            <p className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              {post.category.name}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            نوشته شده توسط {post.author.name} در تاریخ {new Date(post.createdAt).toLocaleDateString('fa-IR')}
          </p>
        </div>

        {post.imageUrl && (
          <div className="mt-8">
            <Image
              src={post.imageUrl}
              alt={`تصویر اصلی مقاله ${post.title}`}
              width={1200}
              height={628}
              className="w-full rounded-lg shadow-lg object-cover"
              priority // برای بارگذاری سریع‌تر تصویر اصلی
            />
          </div>
        )}

        <div
          className="mt-8 prose prose-lg prose-indigo mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
