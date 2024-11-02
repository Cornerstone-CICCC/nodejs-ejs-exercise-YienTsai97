import { Router, Request, Response } from "express";

const pageRouter = Router()

pageRouter.get('/', (req: Request, res: Response) => {
    //res.status(200).send("HomePage")
    res.status(200).render('index', { title: "My Home Page" })
})

pageRouter.get('/about', (req: Request, res: Response) => {
    //res.status(200).send("About")
    res.status(200).render('about', { title: "About Page" })
})

pageRouter.get('/contact', (req: Request, res: Response) => {
    //res.status(200).send("contact")
    res.status(200).render('contact', { title: "Contact Page" })
})

export default pageRouter