const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const pRouter = require("./pokemonRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan("dev"));

server.use("/api/pokemon", pRouter);

module.exports = server;
