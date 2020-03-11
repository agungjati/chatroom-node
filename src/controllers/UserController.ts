import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, QueryParams} from "routing-controllers";
import { UserRepository } from '../repository/UserRepository';
import { UserParam } from "../parameters/userParam";

@JsonController()
export class UserController {

   private _userRepo :UserRepository = new UserRepository();

   //  @Get("/users")
   //  getAll() {
   //     return "This action returns all users";
   //  }

    @Get("/user")
    async getOne(@QueryParams() {email, password} :any) {
       const isValidUser = await this._userRepo.isValidUser(email, password);
       return isValidUser;
    }

    @Post("/user")
    async post(@Body() user: UserParam) {
       const id = await this._userRepo.Save(user);
       return { id };
    }

   //  @Put("/users/:id")
   //  put(@Param("id") id: number, @Body() user: any) {
   //     return "Updating a user...";
   //  }

   //  @Delete("/users/:id")
   //  remove(@Param("id") id: number) {
   //     return "Removing user...";
   //  }

}
