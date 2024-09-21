require("dotenv").config({
    path: "./config.env"
});
const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5713",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    }
})

io.on("connection", socket => {
    console.log(`Socket connected: ${socket.id}`);
})

const PORT = 8000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}!`);
})