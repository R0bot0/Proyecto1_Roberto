import express from 'express';
import usuariosRouter from './usuarios/usuarios.router';
import restaurantesRouter from './restaurantes/restaurantes.router';
import productosRouter from './productos/productos.router';
import pedidosRouter from './pedidos/pedidos.router';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/pedidos', pedidosRouter);
app.use('/productos', productosRouter);
app.use('/restaurantes', restaurantesRouter);
app.use('/usuarios', usuariosRouter);


mongoose
  .connect('mongodb+srv://proyecto1.gddm4tv.mongodb.net/', {
    dbName: 'AppDelivery',
    user: 'test',
    pass: 'test',
  })
  .then(() => console.log('database connected'))
  .catch((error) => console.log(error));

try {
  app.listen(port);
  console.log('server running on port ' + port);
} catch (error) {
  console.log(error);
}