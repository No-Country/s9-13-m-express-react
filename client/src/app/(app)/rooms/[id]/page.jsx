'use client';

import React, { useContext, useEffect } from 'react';
import { RoomContext } from '@/context/RoomContext';
import { useParams } from 'next/navigation';
import { VideoPlayer } from '@/components/VideoPlayer';

function Room() {
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
  }, [ws, me, id]);

  return (
    <div>
      <VideoPlayer stream={stream} />
      {Object.values(peers).map((peer) => {
        return <VideoPlayer stream={peer.stream} />;
      })}
    </div>
  );
}

export default Room;
