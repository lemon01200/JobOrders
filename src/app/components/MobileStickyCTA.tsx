import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { useModal } from '../context/ModalContext';

// Part 9 - Mobile sticky CTA bar appears after 600px scroll
export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink text-white p-4 shadow-2xl border-t border-white/20 animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate">Reserve my seat</div>
          <div className="text-xs text-white/70">No payment required to reserve</div>
        </div>
        <Button size="sm" className="bg-white text-ink hover:bg-white/90 shrink-0" onClick={() => openModal('founding')}>
          Reserve <ArrowRight className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
