const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

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

app.listen(3333);
