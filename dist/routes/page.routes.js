"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const uuid_1 = require("uuid");
let messages = [
    {
        id: "test",
        messageText: "Nice website! (*´∀`)~♥ ",
        name: "NN",
    }
];
pageRouter.get('/', (req, res) => {
    //res.status(200).send("HomePage")
    res.status(200).render('index', { title: "My Home Page" });
});
pageRouter.get('/about', (req, res) => {
    //res.status(200).send("About")
    res.status(200).render('about', { title: "About Page" });
});
//Get All Messages
pageRouter.get('/contact', (req, res) => {
    //res.status(200).send("contact")
    res.status(200).render('contact', { title: "Contact Page", messages });
});
//Add Messages
pageRouter.post('/contact', (req, res) => {
    const newMessage = {
        id: (0, uuid_1.v4)(),
        messageText: req.body.messageText,
        name: req.body.name,
    };
    messages = [...messages, newMessage];
    res.status(201).render('contact', { title: "Contact Page", messages });
});
exports.default = pageRouter;
