import {Router} from 'express'
import ClienteController from '../Controller/Cliente/ClienteController.js';
import CachorroController from '../Controller/Cachorro/CachorroController.js';

const router = Router();



router.post('/cliente', ClienteController.handle)
router.get('/cliente',ClienteController.FindAllCliente)
//dog
router.get('/dog',CachorroController.ListaCachorro)
router.get('/dog/:id',CachorroController.findByCliente)
router.post('/dog',CachorroController.handle)
router.delete('/dog/:id',CachorroController.deleteOne)
export {router};