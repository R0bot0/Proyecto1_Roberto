import { Router } from 'express';
import {
  crearusuario,
  readusuarioID,
  readusuarioMyC,
  actusuario,
  deleteusuario,
} from './usuarios.controller';

const usuarioRouter = Router();

usuarioRouter.post('/', crearusuario);
usuarioRouter.get('/:id', readusuarioID);
usuarioRouter.get('/:mail/:password', readusuarioMyC);
usuarioRouter.patch('/:id', actusuario);
usuarioRouter.delete('/:id', deleteusuario);

export default usuarioRouter;``