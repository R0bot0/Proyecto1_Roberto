import { Router } from 'express';
import {
  createrestaurante,
  readrestaurante,
  readrestaurantes,
  updaterestaurante,
  deleterestaurante,
} from './restaurantes.controller';

const restauranteRouter = Router();

restauranteRouter.post('/', createrestaurante);
restauranteRouter.get('/:id', readrestaurante);
restauranteRouter.get('/', readrestaurantes);
restauranteRouter.patch('/:id', updaterestaurante);
restauranteRouter.delete('/:id', deleterestaurante);

export default restauranteRouter;
