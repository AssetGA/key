// 1. Интерфейс TypeScript для документа
export type IProductType = {
  _id: string;
  name: string;
  mark: string;
  country: string;
  imageUrl: string;
  type: string;
  quantity?: number;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
};
