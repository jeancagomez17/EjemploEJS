import express, {Router, Request, Response} from 'express';
import {UserController} from '../controller/userController'

const users = new UserController()

const router = express.Router();

router.get('/card', (req:Request, res:Response) => {

    res.render('index', {titulo:'prueba', personas:users.getUsers()})


})



export default router