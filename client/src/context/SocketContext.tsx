import { io } from "socket.io-client";
import { createContext } from "react";
import { ISocketContext } from "../types";

const SOCKET_URL: any = process.env.REACT_APP_BACKEND;

export const socketContext: ISocketContext = {
  socket: io(SOCKET_URL)
};

export const SocketContext = createContext({} as ISocketContext);