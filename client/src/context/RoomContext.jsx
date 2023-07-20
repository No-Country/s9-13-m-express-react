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
  const [stream, setStream] = useState();
  const [peers, setPeers] = useState({});
  const enterRoom = ({ roomId }) => {
    window.location.href = `/rooms/${roomId}`;
    console.log(roomId);
  };
  const getUsers = ({ participants }) => {
    setParticipants(participants);
    // console.log(participants);
  };
  useEffect(() => {
    const meId = uuidV4();
    const fn = async () => {
      import('peerjs').then((data) => {
        const peer = new data.Peer(meId, {
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              {
                urls: 'turn:0.peerjs.com:3478',
                username: 'peerjs',
                credential: 'peerjsp',
              },
            ],
            sdpSemantics: 'unified-plan',
            iceTransportPolicy: 'relay', // <- it means using only relay server (our free turn server in this case)
          },
        });
        setMe(peer);
      });
    };
    fn();
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (error) {
      console.log(error);
    }

    ws.on('room-created', enterRoom);
    ws.on('get-users', getUsers);
  }, []);

  useEffect(() => {
    if (!me) return;
    if (!stream) return;
    ws.on('user-joined', ({ peerId }) => {
      //aca inicializamos la llamada y pasamos nuestro stream
      const call = me.call(peerId, stream);
      console.log('call:', call);

      call.on('stream', (peerStream) => {
        console.log('usuario 1, peerStream:', peerStream);
        setPeers((prev) => ({ ...prev, [peerId]: { stream: peerStream } }));
      });
    });

    me.on('error', (err) => {
      console.log(err);
    });

    //Aqui escuchamos una llamada y respondemos con nuestro stream
    me.on('call', (call) => {
      console.log('usuario 2, call:', call);

      call.answer(stream);
      setPeers((prev) => ({ ...prev, [call.peer]: { stream: peerStream } }));
    });
  }, [me, stream]);
  // console.log(peers);
  return (
    <RoomContext.Provider value={{ ws, me, participants, stream }}>
      {children}
    </RoomContext.Provider>
  );
};
