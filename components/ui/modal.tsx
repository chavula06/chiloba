import * as React from 'react';
import { cn } from '@/lib/utils';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, open, onOpenChange, title, description, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined}>
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
        <div
          ref={ref}
          className={cn(
            'relative z-10 w-full max-w-lg rounded-2xl border border-gray-700 bg-[#161B22] p-6 shadow-2xl',
            'animate-in fade-in zoom-in-95 duration-200',
            className
          )}
          {...props}
        >
          {(title || description) && (
            <div className="mb-4">
              {title && (
                <h2 id="modal-title" className="text-xl font-semibold text-white">
                  {title}
                </h2>
              )}
              {description && <p className="mt-1 text-sm text-gray-400">{description}</p>}
            </div>
          )}
          <div>{children}</div>
        </div>
      </div>
    );
  }
);
Modal.displayName = 'Modal';

export { Modal };