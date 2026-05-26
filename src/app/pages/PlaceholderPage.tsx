import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-5">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        {description && (
          <p className="text-lg text-ink/70 leading-relaxed">
            {description}
          </p>
        )}
        <div className="pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
