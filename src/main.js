import express from 'express';
const server = express();

import dotenv from 'dotenv';
dotenv.config();

import bodyParser from 'body-parser';
server.use(bodyParser.json());

import { mysqlDB, connect  } from './mysql.js';
connect();

import Api from './routes/index.js';
server.use("/api", Api)    

server.listen(process.env.PORT, () => {
    console.log(` Server on at: http://${process.env.HOST}:${process.env.PORT} `);
})