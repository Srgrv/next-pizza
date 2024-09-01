// 60. products.ts. Описываем метод для поиска наших ingredients

import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

// types
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

  return data;
};
