const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { handleError } = require("./middleware/error")
const unknownEndPoint = require("./middleware/unknownEndPoint")
const router = require("./router")

const app = express()

app.set("trust proxy", 1)
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use("/api", router)
app.get("/", (request, response) => {
    response.send(`<h1 style='text-align: center'>LEAVE MGMT API</h1>`)
})


app.use(unknownEndPoint);
app.use(handleError);

module.exports = app 