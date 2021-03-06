const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const cors = require("cors")
const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)

server.listen(PORT, () =>
  app.get("/", (req, res) => res.send("Hello World"))
  app.use(cors())
)
