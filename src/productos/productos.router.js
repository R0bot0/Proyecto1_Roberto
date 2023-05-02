import { Router } from 'express';
import {
  createproducto,
  readproducto,
  readproductos,
  updateproducto,
  deleteproducto,
} from './productos.controller';

const productosRouter = Router();

productosRouter.post('/', createproducto);
productosRouter.get('/:id', readproducto);
productosRouter.get('/', readproductos);
productosRouter.patch('/:id', updateproducto);
productosRouter.delete('/:id', deleteproducto);

export default productosRouter;