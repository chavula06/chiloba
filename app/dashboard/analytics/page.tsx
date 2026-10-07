import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Dashboard Analytics - Chiloba Mwabu',
};

export default function DashboardAnalyticsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Downloads', value: '1,234' },
          { label: 'Active Users', value: '567' },
          { label: 'Revenue', value: '$12,345' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-800 bg-[#161B22] p-6">
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
      <Card className="border-gray-800 bg-[#161B22]">
        <CardContent className="p-6">
          <p className="text-gray-400">Analytics charts and graphs will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}