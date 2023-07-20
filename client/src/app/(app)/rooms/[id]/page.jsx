'use client';

import React, { useContext, useEffect } from 'react';
import { RoomContext } from '@/context/RoomContext';
import { useParams } from 'next/navigation';

function Room() {
  const { id } = useParams();
  const { ws, me, participants } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
  }, [ws, me, id]);
  console.log(participants);
  return (
    <div>
      <h1>rooms ${id}</h1>
      <ul>
        {participants &&
          participants.map((p, index) => <li key={index}>{p}</li>)}
      </ul>
    </div>
  );
}

export default Room;
