'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function AppLayout({ children }) {
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();

  if (currentUser.statusRegister === 'registered') {
    router.push('/habilidad/ensenar');
  } else {
    if (
      currentUser.status === 'not-authenticated' ||
      currentUser.status === 'checking'
    ) {
      router.push('/login');
    }
  }

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
          <div className='mx-auto'>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
