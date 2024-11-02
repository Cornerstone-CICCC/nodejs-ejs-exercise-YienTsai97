// This is your server file :)
import express, { Request, Response } from 'express'
import path from 'path'
import pageRouter from './routes/page.routes'

//Create Server
const app = express()

//Set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

//Middleware
app.use(express.static(path.join(__dirname, "public"))) // css

//Routes
app.use('/', pageRouter)

//Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`)
})