import { Schema, model } from 'mongoose';

const pedidoSchema = new Schema(
  {
    user_id: { type: String, required: true },
    restaurante_id: { type: String, required: true },
    state: {
      type: String,
      required: true,
      enum: [
        'creado',
        'enviado',
        'aceptado',
        'recibido',
        'en direccion',
        'realizado',
      ],
    },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const pedidoModel = model('pedidos', pedidoSchema);
export default pedidoModel;