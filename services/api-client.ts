// 56. api-clients.ts Создаем и экспортируем объект Api, который включает в себя все экспортируемые сущности из модуля ./products
import * as products from "./products";

export const Api = {
  products,
};
