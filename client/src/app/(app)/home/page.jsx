'use client';

import { useSelector } from 'react-redux';

export default function HomePage() {
  const currentUser = useSelector((state) => state.user);

  return (
    <main>
      <h1>Hello! {currentUser.user.email}</h1>
    </main>
  );
}
