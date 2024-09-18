import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import WebApp from "@twa-dev/sdk";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [userId, setUserId] = useState(null);
  // const [userId, setUserId] = useState({
  //   id : "1578426474"
  // });

  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user;
      setUserId(telegramUserId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const newSocket = io("https://abcbackend.donative.in:3000", {
        query: { telegramId: userId?.id },
        transports: ["websocket"],
      });
      setSocket(newSocket);

      return () => newSocket.close();
    }
  }, [userId]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
