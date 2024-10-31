'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import egyptFlag from '../../../public/images/egypt.png';
import englandFlag from '../../../public/images/England.png'; // تأكد من وجود علم إنجلترا هنا

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
      {localeActive === 'en' ? (
        <Link
          href='/ar'
          onClick={() => handleLanguageChange('ar')}
          className='flex items-center'
        >
          <Image
            src={egyptFlag}
            alt='العربية'
            width={56} // حجم الصورة
            height={33} // حجم الصورة
            className=' rounded-[6px]'
          />
        </Link>
      ) : (
        <Link
          href='/en'
          onClick={() => handleLanguageChange('en')}
          className='flex items-center'
        >
          <Image
            src={englandFlag}
            alt='English'
            width={56} // حجم الصورة
            height={33} // حجم الصورة
            className=' rounded-[6px] '
          />
        </Link>
      )}
    </div>
  );
}
