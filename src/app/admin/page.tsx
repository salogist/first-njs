import { redirect } from 'next/navigation';

/**
 * این کامپوننت به عنوان صفحه اصلی پنل ادمین عمل می‌کند.
 * وظیفه آن صرفاً هدایت کاربر به صفحه مدیریت مقالات است.
 */
export default function AdminPage() {
  // کاربر را به صفحه مدیریت مقالات هدایت کن
  redirect('/admin/posts');

  // از آنجایی که redirect بلافاصله اتفاق می‌افتد،
  // این بخش هیچ‌گاه رندر نخواهد شد و می‌توان آن را خالی گذاشت.
  return null;
}
