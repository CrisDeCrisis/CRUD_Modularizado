import { Router } from 'express';
import { ctrl } from '../controller/app.controller.js';


const router = Router();

router.get('/', ctrl.obtenerTodos);
router.get ('/:id', ctrl.obtenerUsuario);
router.post('/crear', ctrl.crearUsuario);
router.put('/:id', ctrl.modificarUsuario);
router.delete('/:id', ctrl.eliminarUsuario);

export { router };