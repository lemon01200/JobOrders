import { Link } from 'react-router';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-5">
      <div className="max-w-2xl text-center space-y-6">
        <div className="text-9xl font-mono font-bold text-brand-primary/20">
          404
        </div>
        <h1 className="text-4xl md:text-5xl">Page not found</h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-8">
          <Link to="/">
            <Button size="lg">
              Go to Home <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
