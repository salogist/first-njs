// src/app/admin/layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

// کامپوننت برای آیتم‌های منو
function NavLink({ href, children }: { href: string; children: ReactNode }) {
  // این کامپوننت در آینده می‌تواند برای نمایش لینک فعال (active) استفاده شود
  return (
    <Link href={href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </Link>
  );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-white font-bold">پنل مدیریت</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                  {/* لینک‌های تب‌های مختلف پنل ادمین */}
                  <NavLink href="/admin/messages">پیام‌های تماس</NavLink>
                  <NavLink href="/admin/posts">مدیریت مقالات</NavLink>
                  {/* می‌توانید لینک‌های دیگر را اینجا اضافه کنید */}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
               <Link href="/" className="text-gray-300 hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all">
                  بازگشت به سایت
                </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* محتوای هر صفحه از پنل ادمین در اینجا نمایش داده می‌شود */}
          {children}
        </div>
      </main>
    </div>
  );
}
