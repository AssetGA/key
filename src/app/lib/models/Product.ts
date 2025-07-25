import { Schema, model, models, Document, Model } from "mongoose";

// 1. Интерфейс TypeScript для документа
export interface IProduct extends Document {
  name: string;
  mark: string;
  country: string;
  imageUrl: string;
  type: string;
  quantity?: number;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Схема Mongoose
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, maxLength: 200 },
    mark: { type: String },
    country: { type: String },
    imageUrl: { type: String },
    type: { type: String },
    quantity: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

// 3. Экспорт модели с проверкой на повторное объявление
const Product: Model<IProduct> =
  models.Product || model<IProduct>("Product", productSchema);

export default Product;
