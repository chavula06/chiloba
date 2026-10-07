import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'premium' | 'free';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
          {
            'bg-blue-600/20 text-blue-400': variant === 'default',
            'bg-gray-700 text-gray-300': variant === 'secondary',
            'bg-red-600/20 text-red-400': variant === 'destructive',
            'border border-gray-600 text-gray-300': variant === 'outline',
            'bg-gradient-to-r from-amber-500 to-yellow-400 text-black': variant === 'premium',
            'bg-emerald-600/20 text-emerald-400': variant === 'free',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };