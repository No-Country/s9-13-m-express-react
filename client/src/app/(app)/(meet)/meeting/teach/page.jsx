'use client';

import { RoomContext } from '@/app/(app)/(meet)/RoomContext';
import CardMeet from '@/components/Meet/cardMeet';
import { useContext } from 'react';

export default function Meeting() {
  const { ws } = useContext(RoomContext);

  const createRoom = () => {
    const id = '1';
    ws.emit('create-room', id);
  };

  return (
    <div className='flex items-center flex-col w-screen my-10'>
      <CardMeet>
        <button
          onClick={createRoom}
          className='bg-yellow-400 w-8/12 py-2 px-8 rounded-full text-xl text-center hover:bg-purpleIconsAndInputs text-white'
        >
          Iniciar llamada
        </button>
      </CardMeet>
    </div>
  );
}
