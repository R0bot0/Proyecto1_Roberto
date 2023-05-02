import { Schema, model } from 'mongoose';
export default usuarioModel;
const usuarioSchema = new Schema(
  {
    mail: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    contraseña: { type: String, required: true },
    telefono: { type: String, required: true, unique: true },
    dir: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['cliente', 'domiciliario', 'administrador de restaurante'],
    },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const usuarioModel = model('usuarios', usuarioSchema);
