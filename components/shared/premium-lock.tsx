import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumLockProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function PremiumLock({ className, size = 'md' }: PremiumLockProps) {
  const sizeMap = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-6 w-6',
  };

  return (
    <span className={cn('inline-flex items-center gap-1 text-amber-400', className)}>
      <Lock className={sizeMap[size]} />
      Premium
    </span>
  );
}