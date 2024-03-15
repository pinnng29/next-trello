import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../public/fonts/font.woff2"
});

export const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="hover:opacity-75 transition flex items-center gap-x-2">
        <Image
          src={'/logo.svg'}
          alt="Logo"
          width={30}
          height={30}
        />
        <p
          className={cn('text-lg text-neutral-700', headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};
