import {  Body, Get, Post, Put, Delete, JsonController, QueryParams, Res, Header, UseBefore, Middleware, Req, Param} from "routing-controllers";
import { ChatRepository } from '../repository/ChatRepository';
import { chatroomParam, addMessageParam } from "../parameters/chatroomParam";

@JsonController()
export class ChatController {

   private _chatRepo :ChatRepository = new ChatRepository();

    @Post("/create-chat-room")
    async CreateChatRoom(@Body() chatroom: chatroomParam) {
       const id = await this._chatRepo.CreateChatRoom(chatroom.name);
       return { id };
    }

    @Get("/chatrooms")
    async GetChatrooms() {
        const res = await this._chatRepo.GetChatrooms();
        return res
    }

    @Post("/add-message")
    async AddMessage(@Body() messageParam: addMessageParam) {
       await this._chatRepo.AddMessage(messageParam);
       return "Ok";
    }
}
