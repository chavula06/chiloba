import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Chiloba Mwabu',
};

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Registered Users', value: '1,234', icon: '👥' },
          { label: 'Downloads', value: '5,678', icon: '📥' },
          { label: 'Premium Sales', value: '$12,345', icon: '💰' },
          { label: 'Pending Requests', value: '23', icon: '⏳' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-800 bg-[#161B22] p-6">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="border-gray-800 bg-[#161B22]">
          <CardHeader><CardTitle>Revenue Chart</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-400">Revenue chart will appear here.</p>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-[#161B22]">
          <CardHeader><CardTitle>Downloads Chart</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-400">Downloads chart will appear here.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-gray-800 bg-[#161B22]">
        <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
        <CardContent>
          <p className="text-gray-400">Recent activity feed will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}