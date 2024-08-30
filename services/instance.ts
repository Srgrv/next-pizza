// 52. instance.ts Создаем и экспортируем экземпляр axios с настроенным базовым URL
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
