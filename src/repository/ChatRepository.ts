import Chat from './schemas/chatSchema';
import moment from 'moment';
import { addMessageParam } from '../parameters/chatroomParam';

export class ChatRepository {

    public async GetChatrooms() {
        try {
            const chatrooms: any = await Chat.find().select("name").exec();
            return chatrooms.map((x: any) => ({ id: x._id.toString(), name: x.name }))
        } catch (err) {
            throw Error(err)
        }
    }

    public async GetChatroom(id: string) {
        try {
            const res: any = await Chat.findOne({ _id: id }).exec();
            return {
                id: res._id.toString(),
                name: res.name,
                members: res.members.map((x :any) => (x.username)),
                chats: res.chats.map((x :any) => ({
                    username: x.username,
                    message: x.message,
                    createdAt: moment(x.createdAt).format("DD-MM-YYYY HH:MM")
                }))
            };

        } catch (err) {
            throw Error(err)
        }
    }

    public async CreateChatRoom(nameChatroom: string): Promise<string> {
        const chat = new Chat({
            name: nameChatroom,
            Date: new Date(),
            members: [],
            chats: []
        })
        await chat.save();
        return chat.id;
    }

    public async AddMessage(messageParam: addMessageParam): Promise<void> {
        const { id, username, message } = messageParam
        await Chat.updateOne(
            { "_id": id },
            {
                "$addToSet": {
                    "chats": {
                        username,
                        message,
                        createdAt: new Date()
                    },
                    "members": {
                        username
                    }
                }
            },
            {safe: true, new:true},
            function (err, raw) {
                if (err) {
                    throw Error(err);
                }
            }
        ).exec();


    }


}