import Link from 'next/link';
import Image from 'next/image';
import prisma from '@/lib/prisma';

// تابع برای خواندن مقالات منتشر شده از دیتابیس
async function getPublishedPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true }, // فقط مقالاتی که منتشر شده‌اند
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: { name: true },
      },
      category: {
        select: { name: true, slug: true },
      },
    },
  });
  return posts;
}

// کامپوننت صفحه اصلی وبلاگ
export default async function PostsPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            آخرین مقالات
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            جدیدترین مطالب و آموزش‌ها را در اینجا دنبال کنید.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 mt-12">هنوز مقاله‌ای منتشر نشده است.</p>
        ) : (
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex-shrink-0">
                  {post.imageUrl && (
                    <Link href={`/posts/${post.slug}`}>
                      <Image
                        className="h-48 w-full object-cover"
                        src={post.imageUrl}
                        alt={`تصویر مقاله ${post.title}`}
                        width={400}
                        height={200}
                        // در صورت خطا در بارگذاری تصویر، یک جایگزین نمایش داده می‌شود
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/EEE/31343C?text=Image'; }}
                      />
                    </Link>
                  )}
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {post.category && (
                      <p className="text-sm font-medium text-indigo-600">
                        <Link href={`/category/${post.category.slug}`} className="hover:underline">
                          {post.category.name}
                        </Link>
                      </p>
                    )}
                    <Link href={`/posts/${post.slug}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      {/* Placeholder for author image */}
                      <span className="sr-only">{post.author.name}</span>
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                        {post.author.name?.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.createdAt.toISOString()}>
                          {new Date(post.createdAt).toLocaleDateString('fa-IR')}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
