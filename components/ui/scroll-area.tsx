import * as React from 'react';
import { cn } from '@/lib/utils';

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, orientation = 'vertical', children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
        <div className={cn(orientation === 'vertical' ? 'h-full w-full' : 'flex flex-row')}>{children}</div>
      </div>
    );
  }
);
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };