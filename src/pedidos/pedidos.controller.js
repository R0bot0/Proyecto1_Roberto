import pedidoModel from './pedidos.model';

//POST / Create
export async function createpedido(req, res) {
  try {
    const pedido = req.body;
    req.body.active = true;
    const document = await pedidoModel.create(pedido);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//GET / Read
//ID
export async function readpedido(req, res) {
  try {
    const id = req.params.id;
    const document = await pedidoModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//Usuario que realizó, Usuario que envío, Restaurante Y/O Fechas
export async function readpedidos(req, res) {
  try {
    const { user_id, restaurant_id, initial_date, final_date } = req.query;
    const filter = {
      ...(user_id && { user_id: user_id }),
      ...(restaurant_id && { restaurant_id: restaurant_id }),
      ...(initial_date &&
        final_date && {
          createdAt: {
            $gte: new Date(initial_date),
            $lt: new Date(final_date),
          },
        }),
      active: true,
    };
    const documents = await pedidoModel.find(filter);
    documents.length > 0
      ? res.status(200).json(documents)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//Enviados pero sin aceptar
export async function readEnviados(res) {
  try {
    const document = await pedidoModel.find({
      state: 'enviado',
      active: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//PATCH / Update
export async function updatepedido(req, res) {
  try {
    const id = req.params.id;
    const document = await pedidoModel.findOneAndUpdate(
      { _id: id, state: 'creado', active: true },
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE / Delete
export async function deletepedido(req, res) {
  try {
    const id = req.params.id;
    const document = await pedidoModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
