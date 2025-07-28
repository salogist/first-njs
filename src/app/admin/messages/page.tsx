import prisma from '@/lib/prisma';

// این یک تابع async است که داده‌ها را مستقیماً از دیتابیس روی سرور می‌خواند
async function getMessages() {
  try {
    const messages = await prisma.formRequest.findMany({
      orderBy: {
        createdAt: 'desc', // مرتب‌سازی بر اساس جدیدترین
      },
    });
    return messages;
  } catch (error) {
    console.error("Database Error:", error);
    // در صورت بروز خطا، یک آرایه خالی برمی‌گردانیم تا صفحه از کار نیفتد
    return [];
  }
}

// این کامپوننت یک Server Component است
export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Received Messages</h1>
        
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages found.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages.map((msg) => (
                    <tr key={msg.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(msg.createdAt).toLocaleString('fa-IR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {msg.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {msg.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 break-words max-w-md">
                        {msg.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
