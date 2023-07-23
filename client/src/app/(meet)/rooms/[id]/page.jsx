'use client';

import { useContext, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { MyVideoPlayer } from '@/components/Meet/MyVideoPlayer';
import { VideoPlayer } from '@/components/Meet/VideoPlayer';
import { RoomContext } from '@/app/(meet)/RoomContext';

function Room() {
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
  }, [ws, me, id]);

  return (
    <div>
      <MyVideoPlayer stream={stream} />
      {Object.values(peers).map((peer, index) => {
        return <VideoPlayer key={index} stream={peer.stream} />;
      })}
    </div>
  );
}

export default Room;
