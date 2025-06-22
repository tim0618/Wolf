// src/signalr.js
import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5090/chatHub") // 你後端的 URL
  .withAutomaticReconnect()
  .build();

export default connection;
