const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://jaziel:PASSWORD@cluster0-wnuir.mongodb.net/semana10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors());
app.use(express.json());

// Métodos HTTP: GET,POST, PUT, DELETE

// TIPOS DE PARÂMETROS:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.use(routes);

server.listen(3333);
