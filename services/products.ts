// 54. products.ts. Описываем метод для поиска наших продуктов

import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

// types
import { Product } from "@prisma/client";

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    }
  );

  return data;
};
