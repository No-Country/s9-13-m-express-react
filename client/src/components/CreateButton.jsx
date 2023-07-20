'use client';
import { RoomContext } from '@/context/RoomContext';
import React, { useContext } from 'react';

function CreateButton() {
  const { ws } = useContext(RoomContext);

  const createRoom = () => {
    ws.emit('create-room');
  };
  return (
    <button
      onClick={createRoom}
      className='bg-yellow-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white'
    >
      Start new meeting
    </button>
  );
}

export default CreateButton;
