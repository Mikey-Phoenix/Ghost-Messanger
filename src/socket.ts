import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", {
    withCredentials: true, // sends your login cookie
    autoConnect: false,    // we connect only on the messages page
});