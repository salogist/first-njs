'use client';

import { useState, useEffect, FormEvent } from 'react';
// useParams را از next/navigation وارد می‌کنیم
import { useRouter, useParams } from 'next/navigation';

// تعریف نوع داده برای پست و دسته‌بندی
interface PostData {
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  imageUrl: string | null;
  published: boolean;
  categoryId: number | null;
}
interface Category {
  id: number;
  name: string;
}

// دیگر نیازی به دریافت params از props نیست
export default function EditPostPage() {
  const params = useParams(); // از هوک برای گرفتن پارامترها استفاده می‌کنیم
  const slug = params.slug as string; // slug را از پارامترها استخراج می‌کنیم

  const [post, setPost] = useState<PostData | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // اگر slug هنوز آماده نبود، از اجرای تابع جلوگیری می‌کنیم
    if (!slug) return;

    async function fetchData() {
      setIsLoading(true);
      try {
        // Fetch post data using the slug from the hook
        const postRes = await fetch(`/api/posts/${slug}`);
        if (!postRes.ok) throw new Error('Failed to fetch post data.');
        const postData = await postRes.json();
        setPost(postData);

        // Fetch categories
        const catRes = await fetch('/api/categories');
        if (!catRes.ok) throw new Error('Failed to fetch categories');
        setCategories(await catRes.json());

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [slug]); // وابستگی useEffect را به slug تغییر می‌دهیم

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    if (post) {
      setPost({
        ...post,
        [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!post) return;

    setIsLoading(true);
    setError(null);

    try {
      // از slug که از هوک گرفتیم استفاده می‌کنیم
      const res = await fetch(`/api/posts/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          categoryId: post.categoryId ? Number(post.categoryId) : null,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to update post');
      }
      
      router.push('/admin/posts'); // بازگشت به لیست مقالات
      router.refresh();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="text-center p-10">در حال بارگذاری اطلاعات پست...</div>;
  if (error) return <div className="text-center p-10 text-red-500">خطا: {error}</div>;
  if (!post) return <div className="text-center p-10">پست مورد نظر یافت نشد.</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">ویرایش پست: {post.title}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">عنوان مقاله</label>
          <input
            type="text" name="title" id="title"
            value={post.title} onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">اسلاگ (آدرس URL)</label>
          <input
            type="text" name="slug" id="slug"
            value={post.slug} onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Image URL */}
        <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">آدرس تصویر اصلی</label>
            <input
              type="text" name="imageUrl" id="imageUrl"
              value={post.imageUrl || ''} onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="/images/your-image.jpg"
            />
        </div>

        {/* Excerpt */}
        <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">خلاصه مقاله</label>
            <textarea
              name="excerpt" id="excerpt" rows={3}
              value={post.excerpt || ''} onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">محتوای اصلی</label>
          <textarea
            name="content" id="content" rows={10}
            value={post.content} onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">دسته‌بندی</label>
          <select
            name="categoryId" id="categoryId"
            value={post.categoryId ?? ''} onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">بدون دسته‌بندی</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Published */}
        <div className="flex items-center">
          <input
            id="published" name="published" type="checkbox"
            checked={post.published} onChange={handleInputChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
            انتشار پست
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
          </button>
        </div>
      </form>
    </div>
  );
}
