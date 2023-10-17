import express from 'express'
import db from '../../database/index.js';

class ClienteController{
    static async handle(req,res){
        const {nome, rg} = req.body;
        const cliente = await db.cliente.create({
            data:{
                nome,
                rg
            }})
        return res.json(cliente)
    }

    static async FindAllCliente(req,res){
        const cliente = await db.cliente.findMany()
        return res.json(cliente)
    }
  
}

export default ClienteController;