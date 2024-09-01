// 56. api-clients.ts Создаем и экспортируем объект Api, который включает в себя все экспортируемые сущности из модуля ./products
import * as products from "./products";

// 62. api-clients.ts Создаем и экспортируем объект Api, который включает в себя все экспортируемые сущности из модуля ./ingredients
import * as ingredients from "./ingredients";

export const Api = {
  products,
  ingredients,
};
