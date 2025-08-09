import {Request, Response} from 'express';
import users from '../Model/ModelUsers';
import {ModelUsers} from '../Model/ModelUsers';

export const CreateUser = (response: Response, request: Request) => {
    const {name, email} = request.body;
    
    if(!name || !email) {
        response.status(400).json({message:'All fields must be filled in !'})

        const NewUser = new ModelUsers(name, email);
        users.push(NewUser)
        response.status(201).json({message: 'The user was add with success'});
        return;
    }
}