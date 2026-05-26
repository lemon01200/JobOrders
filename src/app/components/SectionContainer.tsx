import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'soft' | 'purple';
  id?: string;
}

// Part 2.3 - Section padding
// Desktop 120px · Tablet 80px · Mobile 64px (top & bottom)
export default function SectionContainer({
  children,
  className,
  background = 'white',
  id,
}: SectionContainerProps) {
  const bgClasses = {
    white: 'bg-surface',
    soft: 'bg-soft-surface',
    purple: 'bg-gradient-to-b from-deep-purple-start to-deep-purple-end text-white',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-20 lg:py-[120px]',
        bgClasses[background],
        className
      )}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}
