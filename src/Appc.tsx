import React, { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

const socket: Socket = io('http://localhost:3000');

interface Data{
  message:string,
  numberTicket:number
}
const App: React.FC =() =>{
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message23', (data: string) => {
      console.log('Received message:', data);
    });
  }, []);
const data:Data = {
  message:"tonga ve",
  numberTicket:23
}; 
  const sendMessage = () => {
    
    socket.emit('message', data);
  };

  return (
    <div>
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;