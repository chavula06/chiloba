import * as React from 'react';
import { cn } from '@/lib/utils';

const Separator = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cn('border-gray-800', className)} {...props} />
  )
);
Separator.displayName = 'Separator';

export { Separator };