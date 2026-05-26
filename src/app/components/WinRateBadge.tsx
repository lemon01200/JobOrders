import { cn } from '../lib/utils';

interface WinRateBadgeProps {
  score: number;
  className?: string;
}

// Part 7 - Win rate scoring and color coding
export default function WinRateBadge({ score, className }: WinRateBadgeProps) {
  const getColor = () => {
    if (score >= 80) return 'text-win-green';
    if (score >= 60) return 'text-win-amber';
    return 'text-win-grey';
  };

  const getLabel = () => {
    if (score >= 80) return '[HIGH]';
    return '[MEDIUM]';
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex items-baseline gap-2">
        <span className="text-[13px] uppercase tracking-wider text-ink/60">WIN RATE</span>
        <span className={cn('text-[28px] font-mono font-semibold', getColor())}>
          {score}
        </span>
        <span className="text-[13px] text-ink/60">/ 100</span>
      </div>
      {score >= 60 && (
        <span className={cn('text-xs font-mono font-semibold', getColor())}>
          {getLabel()}
        </span>
      )}
    </div>
  );
}
