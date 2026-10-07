import * as React from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, children, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
      <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
        {show && (
          <div
            ref={ref}
            className={cn(
              'absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg border border-gray-700 whitespace-nowrap z-50',
              className
            )}
            {...props}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);
Tooltip.displayName = 'Tooltip';

export { Tooltip };