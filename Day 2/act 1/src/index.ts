import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const routes = new Routes(app);
routes.setRoutes();


const port = 3000;
const server = app.listen(port, ()=>{
    console.log("App listening at http://%s",port)
})