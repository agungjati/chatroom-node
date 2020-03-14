export type chatroomParam = {
    name: string;
    createdAt :Date;
    members: Array<any>;
    chats: Array<any>;
}

export type addMessageParam = {
    id: string;
    username: string;
    message: string;
}