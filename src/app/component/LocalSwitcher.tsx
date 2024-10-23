'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition, useEffect } from 'react';
import Link from 'next/link';
import immg from "../../../public/images/image 439.png";
export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  useEffect(() => {
    const direction = localeActive === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [localeActive]);

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className='flex space-x-4'>
      <Link href='/en' onClick={() => handleLanguageChange('en')} className='flex items-center'>
        <img src='/' alt='English' className='w-6 h-6' />
      </Link>
      <Link href='/ar' onClick={() => handleLanguageChange('ar')} className='flex items-center'>
        <img src='/path-to-egypt-flag.png' alt='Arabic' className='w-6 h-6' />
      </Link>
    </div>
  );
}
