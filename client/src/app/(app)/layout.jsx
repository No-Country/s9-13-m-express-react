'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function AppLayout({ children }) {
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();

  if(currentUser.statusRegister === "registered"){

    router.push("/habilidad/ensenar")
  } else {
    if (
      currentUser.status === 'not-authenticated' ||
      currentUser.status === 'checking'
    ) {
      router.push("/login")
    }
  }

  

  return <>{children}</>;
}
