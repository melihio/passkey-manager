import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { log } from './utils/logger'
import { Login, Register } from './handler/user'

const v1 = express.Router()
const app = express()
const port = process.env.PORT

v1.post("/register", Register)
v1.post("/login", Login)

app.use(express.json())
app.use("/api/v1", v1)  
app.listen(port, () => log.info(`Server running on port : ${port}`))