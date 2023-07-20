'use client';
import { createContext, useEffect, useState } from 'react';
// import Peer from 'peerjs';
import { io } from 'socket.io-client';
import { v4 as uuidV4 } from 'uuid';
export const RoomContext = createContext(null);
const WS = 'http://localhost:3001';
const ws = io(WS);

export const RoomProvider = ({ children }) => {
  const [me, setMe] = useState();
  const [participants, setParticipants] = useState();

  const enterRoom = ({ roomId }) => {
    window.location.href = `/rooms/${roomId}`;
    console.log(roomId);
  };
  const getUsers = ({ participants }) => {
    setParticipants(participants);
    console.log(participants);
  };
  useEffect(() => {
    const meId = uuidV4();
    const fn = async () => {
      import('peerjs').then((data) => {
        const peer = new data.Peer(meId);
        setMe(peer);
      });
    };
    fn();

    ws.on('room-created', enterRoom);
    ws.on('get-users', getUsers);
  }, []);

  return (
    <RoomContext.Provider value={{ ws, me, participants }}>
      {children}
    </RoomContext.Provider>
  );
};
