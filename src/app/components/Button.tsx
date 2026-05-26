import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Part 2.6 - Buttons spec
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-10',
      md: 'h-12',
      lg: 'h-14',
      xl: 'h-16',
    };

    const variantClasses = {
      primary: 'bg-ink text-surface hover:bg-brand-primary transition-colors duration-200',
      secondary: 'border border-ink text-ink hover:border-brand-primary hover:text-brand-primary transition-colors duration-200',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-2xl px-6 text-lg font-medium inline-flex items-center justify-center gap-2',
          'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
