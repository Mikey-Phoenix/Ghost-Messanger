import { io } from "socket.io-client";
import { API_URL } from "./config";

export const socket = io(API_URL, {
    withCredentials: true, // sends your login cookie
    autoConnect: false,    // we connect only on the messages page
});