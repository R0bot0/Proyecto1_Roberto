import { Schema, model } from 'mongoose';

const productosSchema = new Schema(
  {
    id_restaurante: { type: String, required: true },
    categoria: { type: String, required: true },
    nom: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const productosModel = model('productos', productosSchema);
export default productosModel;