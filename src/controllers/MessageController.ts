import {OnConnect, SocketController, SocketIO, ConnectedSocket, OnDisconnect, MessageBody, OnMessage} from "socket-controllers";
import { ChatRepository } from '../repository/ChatRepository';
import { addMessageParam } from "../parameters/chatroomParam";

@SocketController()
export class MessageController {

    private _repo: ChatRepository =  new ChatRepository()

    @OnConnect()
    connection(@ConnectedSocket() socket: any) {
        console.log("client connected");
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: any) {
        console.log("client disconnected");
    }

    @OnMessage("subscribe")
    subscribe(@ConnectedSocket() socket: any, @MessageBody() message: any) {
        socket.join(message.id)
    }

    @OnMessage("unsubscribe")
    async unsubscribe(@ConnectedSocket() socket: any, @MessageBody() message: any) {
        socket.leave(message.id)
    }

    @OnMessage("save")
    async save(@SocketIO() socket: any, @MessageBody() message: addMessageParam) {
        try{
            await this._repo.AddMessage(message)
            socket.in(message.id).emit("message_saved", message);
        }catch(error)
        {
            socket.in(message.id).emit("message_not_saved", error);
        }
        
    }

}