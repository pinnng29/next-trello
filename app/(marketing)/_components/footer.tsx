import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex w-full shrink-0 flex-col items-center justify-between gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
      <Logo />
      <nav className='flex items-center gap-4'>
        <Link href={'/'} className='text-xs text-foreground hover:text-blue-500'>
          Terms of service
        </Link>
        <Link href={'/'} className='text-xs text-foreground hover:text-blue-500'>
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
