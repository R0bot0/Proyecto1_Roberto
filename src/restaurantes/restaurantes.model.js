import { Schema, model } from 'mongoose';

const restauranteSchema = new Schema(
  {
    nom: { type: String, required: true },
    dir: { type: String, required: true },
    categorias: {
      tipo: [String],
      validate: {
        validator: function (array) {
          return array && array.length > 0;
        },
        message: 'Es necesario ingresar al menos una categoría.',
      },
    },
    inventory: { type: Array, required: false },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const restauranteModel = model('restaurantes', restauranteSchema);
export default restauranteModel;