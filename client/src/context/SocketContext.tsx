import { io } from "socket.io-client";
import { createContext } from "react";

const SOCKET_URL: any = process.env.REACT_APP_BACKEND;

interface ISocketContext {
    socket: any
}

export const socketContext: ISocketContext = {
    socket: io(SOCKET_URL)
};

export const SocketContext = createContext({} as ISocketContext);