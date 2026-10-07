import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Admin Testimonials - Chiloba Mwabu',
};

export default function AdminTestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Manage Testimonials</h1>
      <Card className="border-gray-800 bg-[#161B22]">
        <CardContent className="p-6">
          <p className="text-gray-400">Testimonial management interface will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}