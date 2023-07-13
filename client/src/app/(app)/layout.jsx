'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function AppLayout({ children }) {
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();

  if (
    currentUser.status === 'not-authenticated' ||
    currentUser.status === 'checking'
  ) {

    
  }

  return <>{children}</>;
}
