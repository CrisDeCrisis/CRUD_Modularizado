import { Router } from 'express';
import { ctrl } from '../controller/app.controller.js';

const router = Router();

router.post('/', ctrl.crearUsuario);
router.get('/', ctrl.obtenerTodos);
router.get('/:id', ctrl.obtenerUsuario);
router.put('/:id', ctrl.modificarUsuario);
router.delete('/:id', ctrl.eliminarUsuario);

export { router };