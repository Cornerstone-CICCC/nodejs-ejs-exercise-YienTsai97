export interface Message {
    id: string,
    messageText: string,
    name: string,
}

export interface MessageBodyRequest extends Omit<Message, 'id'> { }