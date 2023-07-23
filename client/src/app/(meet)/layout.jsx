'use client';

import { RoomProvider } from '@/app/(meet)/RoomContext';

export default function AppLayout({ children }) {
  return <RoomProvider>{children}</RoomProvider>;
}
