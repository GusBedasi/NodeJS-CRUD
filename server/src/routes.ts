import express, { response } from 'express';
import UserController from './Controllers/UserController';

const routes = express.Router();

const userController = new UserController();

routes.post('/create', userController.create);
routes.get('/index', userController.index);
routes.put('/update/:name', userController.update);
routes.delete('/delete/:name', userController.delete);

export default routes;