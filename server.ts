import express,{Request,Response} from 'express'
import { PrismaClient } from '@prisma/client';

const app=express();
const prisma=new PrismaClient();

//get jokes
app.get('/',async (req:Request,res:Response)=>{
const jokes=await prisma.joke.findMany(
    {include:{creator:true}}
);
res.json({jokes});
});

//create joke
app.post('/',async (req:Request,res:Response)=>{
    //const text=req.body.text;
    //const userId=req.body.userId;

    const joke=await prisma.joke.create({
        data:{
            text:"['hip','hip']",
            userId: "cl1ovegog00533wvn87tcum0v"
        }

    });
res.json({joke});
});

//get single joke
app.get('/:joke_id',(req:Request,res:Response)=>{

});


//delete joke
app.delete('/:joke_id',async (req:Request,res:Response)=>{
    const {joke_id} =req.params;
    const dl_joke=await prisma.joke.delete({
        where:{
            id: String(joke_id),
        } 

    });
res.json(dl_joke);
});
app.listen(3001);