import { Router } from 'express';
import {
  createpedido,
  readpedido,
  readpedidos,
  readEnviados,
  updatepedido,
  deletepedido,
} from './pedidos.controller';

const pedidoRouter = Router();

pedidoRouter.post('/', createpedido);
pedidoRouter.get('/:id', readpedido);
pedidoRouter.get('/', readpedidos);
pedidoRouter.get('/sent/', readEnviados);
pedidoRouter.patch('/:id', updatepedido);
pedidoRouter.delete('/:id', deletepedido);

export default pedidoRouter;