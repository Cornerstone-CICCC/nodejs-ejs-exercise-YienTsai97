import { Router, Request, Response } from "express";
const pageRouter = Router()
import { Message, MessageBodyRequest } from "../types/message";
import { v4 as uuidv4 } from 'uuid'

let messages: Message[] = [
    {
        id: "test",
        messageText: "Nice website! (*´∀`)~♥ ",
        name: "NN",
    }
]

pageRouter.get('/', (req: Request, res: Response) => {
    //res.status(200).send("HomePage")
    res.status(200).render('index', { title: "My Home Page" })
})

pageRouter.get('/about', (req: Request, res: Response) => {
    //res.status(200).send("About")
    res.status(200).render('about', { title: "About Page" })
})

//Get All Messages
pageRouter.get('/contact', (req: Request, res: Response) => {
    //res.status(200).send("contact")
    res.status(200).render('contact', { title: "Contact Page", messages })
})

//Add Messages
pageRouter.post('/contact', (req: Request<{}, {}, MessageBodyRequest>, res: Response) => {
    const newMessage: Message = {
        id: uuidv4(),
        messageText: req.body.messageText,
        name: req.body.name,
    }
    messages = [...messages, newMessage]
    res.status(201).render('contact', { title: "Contact Page", messages })
})



export default pageRouter