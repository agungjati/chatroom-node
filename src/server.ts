import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import './repository/config'
import { ChatController } from "./controllers/ChatController";
import {createSocketServer} from "socket-controllers";
import {MessageController} from "./controllers/MessageController";

const app = createExpressServer({
   cors: true,
   controllers: [
      ChatController
   ]
});

createSocketServer(3001, {
   controllers: [MessageController]
});



app.listen(3000);
