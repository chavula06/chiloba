import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Dashboard - Chiloba Mwabu',
  description: 'Student dashboard for tracking learning progress, downloads, bookmarks, and more.',
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Downloads', value: '24', icon: '📥' },
          { label: 'Bookmarks', value: '12', icon: '🔖' },
          { label: 'Unlocked Premium', value: '3', icon: '🔓' },
          { label: 'Study Hours', value: '48h', icon: '⏱️' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-800 bg-[#161B22] p-6">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-gray-800 bg-[#161B22]">
          <CardHeader><CardTitle>Recent Downloads</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-400">No recent downloads yet.</p>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-[#161B22]">
          <CardHeader><CardTitle>Bookmarks</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-400">No bookmarks yet.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}