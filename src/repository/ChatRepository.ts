import Chat from './schemas/chatSchema';
import { UserParam } from '../parameters/userParam';
import Mongoose from 'mongoose';

export class ChatRepository {

    public async GetChat(userId: string): Promise<void> {
        const chat = new Chat({ })
    }

    public async CreateChatRoom(user :UserParam) :Promise<string> {
        const userId =  Mongoose.Types.ObjectId(user.userId);
        const chat = new Chat({ members:[{...user, userId}], chats: [] })
        await chat.save();
        return chat.id; 
    }
}