import { Request,Response,Router } from "express";

export class AController{
    geta(){
        return (req:Request, res:Response)=>{
            res.json({message: "Hello World"});
        }
    }
    updatea(){
        return  (req:Request, res:Response)=>{
            const data = req.body
            res.json(data);
        }
    }
    patcha(){
        return  (req:Request, res:Response)=>{
            const data = req.body
            res.json(data);
        }
    }
}