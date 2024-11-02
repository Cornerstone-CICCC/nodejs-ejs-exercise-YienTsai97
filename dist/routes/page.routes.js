"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get('/', (req, res) => {
    //res.status(200).send("HomePage")
    res.status(200).render('index', { title: "My Home Page" });
});
pageRouter.get('/about', (req, res) => {
    //res.status(200).send("About")
    res.status(200).render('about', { title: "About Page" });
});
pageRouter.get('/contact', (req, res) => {
    //res.status(200).send("contact")
    res.status(200).render('contact', { title: "Contact Page" });
});
exports.default = pageRouter;
