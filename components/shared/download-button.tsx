import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  href: string;
  className?: string;
  variant?: 'default' | 'outline' | 'gradient';
}

export function DownloadButton({ href, className, variant = 'default' }: DownloadButtonProps) {
  return (
    <a href={href} download className={cn('inline-flex', className)}>
      <Button variant={variant} size="sm">
        <Download className="h-4 w-4" />
        Download
      </Button>
    </a>
  );
}

import { Button } from '@/components/ui/button';