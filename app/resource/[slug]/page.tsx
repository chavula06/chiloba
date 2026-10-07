import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Lock, FileText, Clock, Tag, Bookmark } from 'lucide-react';
import { SAMPLE_RESOURCES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mathematics Resource Center - Chiloba Mwabu',
  description: 'Browse and download premium mathematics educational resources for Grade 10-12 and tertiary students.',
};

export default function ResourceDetailPage() {
  const resource = SAMPLE_RESOURCES[0];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Card className="border-gray-800 bg-[#161B22] overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <FileText className="h-16 w-16 text-gray-600" />
        </div>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl text-white mb-2">{resource.title}</CardTitle>
              <CardDescription className="text-base">{resource.description}</CardDescription>
            </div>
            {resource.premiumStatus === 'premium' && (
              <Badge variant="premium" className="flex items-center gap-1">
                <Lock className="h-3 w-3" /> Premium
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{resource.category}</Badge>
            <Badge variant="outline">{resource.difficulty}</Badge>
            <Badge variant="default">{resource.grade}</Badge>
            <Badge variant="secondary">{resource.type}</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 rounded-lg bg-gray-900">
              <div className="text-xs text-gray-400">File Size</div>
              <div className="text-sm font-medium text-white">{resource.fileSize}</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-900">
              <div className="text-xs text-gray-400">Downloads</div>
              <div className="text-sm font-medium text-white">{resource.downloads.toLocaleString()}</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-900">
              <div className="text-xs text-gray-400">Study Time</div>
              <div className="text-sm font-medium text-white">{resource.estimatedStudyTime}</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-900">
              <div className="text-xs text-gray-400">Upload Date</div>
              <div className="text-sm font-medium text-white">{resource.uploadDate}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Tag className="h-4 w-4" />
            <span>{resource.tags.join(', ')}</span>
          </div>

          <div className="flex gap-3">
            {resource.premiumStatus === 'premium' ? (
              <Button variant="gradient" className="flex-1" asChild>
                <a href={`/resource/${resource.id}/unlock`}>
                  <Lock className="h-4 w-4" />
                  Unlock Resource
                </a>
              </Button>
            ) : (
              <Button variant="gradient" className="flex-1" asChild>
                <a href={resource.url} download>
                  <Download className="h-4 w-4" />
                  Download Free
                </a>
              </Button>
            )}
            <Button variant="outline">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}