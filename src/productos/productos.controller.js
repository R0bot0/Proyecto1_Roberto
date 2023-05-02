import productoModel from './productos.model';

//CREATE
export async function createproducto(req, res) {
  try {
    const producto = req.body;
    req.body.active = true;
    const document = await productoModel.create(producto);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//READ
//ID
export async function readproducto(req, res) {
  try {
    const id = req.params.id;
    const document = await productoModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//Restaurante y/o categoria
export async function readproductos(req, res) {
  try {
    const { id_restaurante, category } = req.query;
    const filter = {
      ...(id_restaurante && { id_restaurante: id_restaurante }),
      ...(category && { category: category }),
      active: true,
    };
    const documents = await productoModel.find(filter);
    documents.length > 0
      ? res.status(200).json(documents)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//PATCH / Update
export async function updateproducto(req, res) {
  try {
    const id = req.params.id;
    const document = await productoModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE / Delete
export async function deleteproducto(req, res) {
  try {
    const id = req.params.id;
    const document = await productoModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
