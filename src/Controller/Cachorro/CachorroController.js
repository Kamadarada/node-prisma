import  Express  from "express";
import db from "../../database/index.js";

class CachorroController{

    static async ListaCachorro(req,res){
        const cachorro = await db.cachorro.findMany();
        return res.status(200).json({message:"Cachorros listados com sucesso",cachorro})
    }


    static async handle(req,res){
        const {nome,raca,idade,ClienteId} = req.body;
        const dog = await db.cachorro.create({
            data:{
                nome,
                raca,
                idade,
                ClienteId
            }
        })
        return res.json(dog)
    }

    static async deleteOne(req,res){
        const Id = Number(req.params.id)
        const cachorroDeleted = await db.cachorro.delete({
            where:{
                id: Id,
            },
        })
        return res.json({message:"Deletado com sucesso",cachorroDeleted})

    }

    static async findByCliente(req,res){
        const Id = Number(req.params.id);
        const Dog = await db.cachorro.findMany({
            where:{
                ClienteId: Id
            }
        })
        return res.status(200).json({message:`Estes pets pertecem à `,Dog})
    }
   
}


export default CachorroController;