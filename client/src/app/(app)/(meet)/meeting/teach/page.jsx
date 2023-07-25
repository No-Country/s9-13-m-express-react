'use client';

import { RoomContext } from '@/app/(app)/(meet)/RoomContext';
import { useContext } from 'react';

export default function Meeting() {
  const { ws } = useContext(RoomContext);

  const createRoom = () => {
    const id = '1';
    ws.emit('create-room', id);
  };
  return (
    <div className='App flex items-center justify-center w-screen h-screen'>
      <button
        onClick={createRoom}
        className='bg-yellow-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white'
      >
        Crear llamada
      </button>
    </div>
  );
}
