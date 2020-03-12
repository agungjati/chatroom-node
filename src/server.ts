import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import { UserController } from "./controllers/UserController";
import './repository/config'
import { ChatController } from "./controllers/ChatController";

const app = createExpressServer({
   controllers: [
      UserController,
      ChatController
   ] 
});

app.listen(3000);
