import * as React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'success' | 'warning';
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full rounded-lg border p-4',
          {
            'border-blue-500/30 bg-blue-500/10 text-blue-400': variant === 'default',
            'border-red-500/30 bg-red-500/10 text-red-400': variant === 'destructive',
            'border-emerald-500/30 bg-emerald-500/10 text-emerald-400': variant === 'success',
            'border-amber-500/30 bg-amber-500/10 text-amber-400': variant === 'warning',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Alert.displayName = 'Alert';

export { Alert };