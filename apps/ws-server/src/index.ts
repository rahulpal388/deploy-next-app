import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const ws = new WebSocketServer({ port: 8081 })

ws.on("connection", async (socket) => {
    try {
        await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })
    } catch (error) {
        socket.send("errro while addin the user from websocket server")
    }
    socket.send("user is added to the database")
})