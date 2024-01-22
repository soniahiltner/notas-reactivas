import express from "express";
import ViteExpress from "vite-express"
import { dbConnect } from "./dbConnect.js"
import 'dotenv/config'
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRouter from "./routes/auth.js";
import notesRouter from "./routes/notes.js";
import topicsRouter from "./routes/topics.js";
import todosRouter from "./routes/todos.js";



const app = express()
dbConnect()
app.disable("x-powered-by")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use('/api', userRouter)
app.use('/api/notes', notesRouter)
app.use('/api/topics', topicsRouter)
app.use('/api/todos',todosRouter)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
)
