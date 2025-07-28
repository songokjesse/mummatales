import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Admin - MammaTales',
  description: 'Admin dashboard for managing stories',
};

export const dynamic = 'force-dynamic';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!(session?.user?.role === 'ADMIN')) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold text-pink-600 mb-4">MammaTales Admin</h2>
          <nav className="space-y-2">
            <a href="/admin/stories" className="block px-4 py-2 hover:bg-gray-100">
              Stories
            </a>
            <a href="/admin/slides" className="block px-4 py-2 hover:bg-gray-100">
              Slides
            </a>
            <a href="/admin/categories" className="block px-4 py-2 hover:bg-gray-100">
              Categories
            </a>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {children}
      </div>
    </div>
  );
}
