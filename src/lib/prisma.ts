import { PrismaClient } from '@/generated/prisma';

// این بخش برای جلوگیری از ساخت نمونه‌های متعدد PrismaClient در محیط توسعه است
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // می‌توانید لاگ‌ها را برای دیباگ فعال کنید
    // log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
