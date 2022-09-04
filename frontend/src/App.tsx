import './App.css';
import 'antd/dist/antd.css'
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import Chatbox from './components/Chatbox';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';

const socket = io('http://localhost:3000');

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });


    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {/* <Chatbox /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chatbox />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
