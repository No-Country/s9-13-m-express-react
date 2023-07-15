'use client';

// import { onLogin } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function AppLayout({ children }) {
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();
  //const dispatch = useDispatch();

  if (
    currentUser.status === 'not-authenticated' ||
    currentUser.status === 'checking'
  ) {
    router.push('/login');
  }
  useEffect(() => {
    async function getUserData() {
      const request = await getUserData(currentUser.id);
      const response = await request.json();
      console.log(response);
      //dispatch(onLogin(response));
    }
    getUserData();
  });

  return <>{children}</>;
}
