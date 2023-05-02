import restauranteModel from './restaurantes.model';

//CREATE
export async function createrestaurante(req, res) {
  try {
    const restaurante = req.body;
    req.body.active = true;
    const document = await restauranteModel.create(restaurante);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//READ(Unidad)
export async function readrestaurante(req, res) {
  try {
    const id = req.params.id;
    const document = await restauranteModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//READ(cantidad)
export async function readrestaurantes(req, res) {
  try {
    const { nom, categories } = req.query;
    const filter = {
      ...(nom && { nom: { $regex: nom, $options: 'i' } }),
      ...(categories && { categories: { $in: categories.split(',') } }),
      active: true,
    };
    const documents = await restauranteModel.find(filter);
    documents.length > 0
      ? res.status(200).json(documents)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//UPDATE
export async function updaterestaurante(req, res) {
  try {
    const id = req.params.id;
    const document = await restauranteModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE
export async function deleterestaurante(req, res) {
  try {
    const id = req.params.id;
    const document = await restauranteModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
