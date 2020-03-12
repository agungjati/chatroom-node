import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, QueryParams, Res, Header, UseBefore, Middleware, Req} from "routing-controllers";
import { ChatRepository } from '../repository/ChatRepository';
import { UserParam } from "../parameters/userParam";
import { MyMiddleware } from "./middleware";
import {Request, Response} from "express";

@JsonController()
export class ChatController {

   private _chatRepo :ChatRepository = new ChatRepository();

    @Post("/create-chat-room")
    @UseBefore(MyMiddleware)
    async post(@Body() user: UserParam, @Req() req :Request) {
       console.log('req', req)
       const id = await this._chatRepo.CreateChatRoom(user);
       return { id };
    }
}
