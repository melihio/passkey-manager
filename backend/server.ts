import express from 'express'

const v1 = express.Router()
const app = express()
// const port = process.env.PORT


// v1.post("/login", Login)
// v1.get("/get-charts", Login)

app.use(express.json())
app.use("/api/v1", v1)
// app.listen(port, () => utils.log.info(`Server running on port : ${port}`))