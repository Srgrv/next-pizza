// Prisma — это библиотека для работы с базой данных в приложениях на Node.js и TypeScript. Она упрощает взаимодействие с базой данных, предлагая удобные API для выполнения запросов.

// PrismaClient: Класс, предоставляемый библиотекой Prisma, который позволяет взаимодействовать с вашей базой данных.
import { PrismaClient } from "@prisma/client";

// prismaClientSingleton: Это функция, которая создает новый экземпляр PrismaClient. Она возвращает новый объект PrismaClient, который можно использовать для выполнения запросов к базе данных.
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// declare const globalThis: Это объявление TypeScript, которое расширяет тип глобального объекта globalThis (глобальный объект, доступный во всех модулях). Мы добавляем свойство prismaGlobal для хранения экземпляра PrismaClient.
// prismaGlobal — это свойство глобального объекта, которое хранит экземпляр Prisma Client.
// ReturnType<typeof prismaClientSingleton> означает, что тип prismaGlobal будет таким же, как возвращаемое значение функции prismaClientSingleton.

// Чтобы узнать, какой тип возвращает эта функция, мы используем ReturnType. Это специальный тип TypeScript, который извлекает тип возвращаемого значения функции.
// typeof prismaClientSingleton возвращает тип функции prismaClientSingleton, который является () => PrismaClient.
// ReturnType<typeof prismaClientSingleton> извлекает тип возвращаемого значения этой функции, то есть PrismaClient.
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// export const prisma: Создаем и экспортируем экземпляр клиента Prisma.

// globalThis.prismaGlobal ?? prismaClientSingleton(): Это выражение проверяет, существует ли уже глобальный экземпляр prismaGlobal. Если нет, то создается новый экземпляр с помощью функции prismaClientSingleton(). Оператор ?? используется для возврата первого не null и не undefined значения.

// Оператор || (Логическое ИЛИ): Возвращает первый истинный (truthy) операнд. Если первый операнд является ложным (falsy), он возвращает второй операнд. Ложные значения включают 0, NaN, "" (пустая строка), null, undefined, и false.

// Оператор ?? (Nullish Coalescing): Возвращает первый операнд, если он не null и не undefined. В противном случае возвращает второй операнд. Он не учитывает другие ложные значения (например, 0, пустую строку и т.д.).
export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production"): Проверяет, не находимся ли мы в режиме разработки (не в продакшене).
// globalThis.prismaGlobal = prisma: Если мы в режиме разработки, сохраняем текущий экземпляр Prisma в глобальной переменной prismaGlobal. Это позволяет избежать создания нового экземпляра Prisma при каждом перезагрузке страницы, что может происходить в режиме разработки.
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
