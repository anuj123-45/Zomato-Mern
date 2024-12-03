import express from "express";
import cors from 'cors';
import helmet from 'helmet';

const app=express();

// application middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(cors())


app.get("/",(req,res)=>{
    return res.json({message:"Setup done"})
})


app.listen((5000),()=>{
    console.log(`server running`);
    
})