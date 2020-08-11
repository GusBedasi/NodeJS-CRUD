import { Request, Response } from 'express';

import db from '../database/connection';

export default class UserController {

    async update  (req: Request, res: Response){
        const { name } = req.params

        try {
            await db('users').where('users.name', name).update(req.body)
            return res.sendStatus(200).send();
        } catch (error) {
            return res.send(400).json({
                error: 'Erro inesperado aconteceu enquanto tentavamos atualizar o usuário',
                message: `${error}`
            })
        }
    }

    async index (req: Request, res: Response){
        try {
            const users = await db('users').where(req.query)

            return res.send(users);
        } catch (error) {
            return res.send(400).json({
                error: 'Erro inesperado aconteceu enquanto tentavamos listar os usuários',
                message: `${error}`
            })
        }
    }

    async delete (req: Request, res: Response){
        const { name } = req.params;

        try {
            await db('users').where('users.name', name).del();
            return res.sendStatus(200).send();
        } catch (error) {
            console.error(error);

            return res.send(400).json({
                error: 'Erro inesperado aconteceu enquanto tentavamos deletar o usuário',
                message: `${error}`
            })
        }
    }

    async create (req: Request, res: Response){
        const {
            name,
            nascimento,
            cpf,
            celular,
            email,
            endereco,
            obs
        } = req.body;
        
        try {
           await db('users').insert({
                name,
                nascimento,
                cpf,
                celular,
                email,
                endereco,
                obs 
            });

            return res.sendStatus(201).send();
        } catch (error) {
            console.error(error);

            return res.send(400).json({
                error: 'Erro inesperado aconteceu enquanto tentavamos criar um novo usuario',
                message: `${error}`
            })
        }
    }

}