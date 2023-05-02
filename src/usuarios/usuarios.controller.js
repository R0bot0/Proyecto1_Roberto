import usuarioModel from './usuarios.model';

//CREATE
export async function crearusuario(req, res) {
  try {
    const usuario = req.body;
    req.body.active = true;
    const document = await usuarioModel.create(usuario);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Read (unidad) (Mail y Contraseña)
export async function readusuarioMyC(req, res) {
    try {
      const { mail, contraseña } = req.params;
      const document = await usuarioModel.findOne({
        mail,
        contraseña,
      });
  
      document ? res.status(200).json(document) : res.sendStatus(404);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

//GET / Read
//ID
export async function readusuarioID(req, res) {
  try {
    const id = req.params.id;
    const document = await usuarioModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//UPDATE
export async function actusuario(req, res) {
  try {
    const id = req.params.id;
    const document = await usuarioModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE
export async function deleteusuario(req, res) {
  try {
    const id = req.params.id;
    const document = await usuarioModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}