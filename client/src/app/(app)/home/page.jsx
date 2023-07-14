'use client';

import { useSelector } from 'react-redux';

export default function HomePage() {
  const currentUser = useSelector((state) => state.user);

  return (
    <main className='min-h-screen bg-customPurple flex flex-col justify-around'>
      <h1>Hello! {currentUser.user.email}</h1>
    </main>
  );
}
