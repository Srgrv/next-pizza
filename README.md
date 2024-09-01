This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Подключение prismа, что-то наподобие mongoose, который позволяет общаться с базой данных, например таких как - mongodb, vercel и тп.

1. npm i prisma @prisma/client
2. Создаем отдельную папку, которая будет отвечать за подключение через prisma к нашей базы данных (prisma)
3. В ней создаем файл, назовем например prisma-client.ts
4. В этом файле будем создавать минимальные настройки для prisma, для этого вставляем код из https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
5. Создаем там же схему, назовем например schema.prisma, которая будет описывать схему нашей базы данных. Для того, чтобы автоматически работало исправление синтаксиса, можно установить плагин Prisma
6. Создаем базу данных, для этого переходим на vercel. Далее нашу базу данных нужно подключить к prisma
7. Создаем .env файл, туда вставляем переменные из vercel из .env.local
8. Пишем в терминале npx prisma db push, берется файл prisma.schema, просходит подключение к vercel базе данных
9. Указываем все скрипты связанных с prisma в package.json
   - "prisma: push": "prisma db push" - Создание базы данных
   - "prisma: studio": "prisma studio" - Запуск панели управления для работы с базой данных
10. Запускаем команду prisma:studio (создается база данных в prisma studio)

Пробуем получить данные из БД через наш API (2:56:00)

1. app. Создаем в ней папку api, здесь будут находиться отдельные пути для работы с нашей базой данных
2. api. В ней создаем еще папку users, а в ней route.ts
3. route.ts. Создаем API маршруты для получения всех пользователей из базы данных. Примечания и возможные улучшения:
   - обработка ошибок
   - валидация данных
   - типизация данных
4. schema.prisma. В схеме User нужно сделать email уникальным

Связи в Prisma. One-to-one, One-to-many, Many-to-one, Many-to-many (relationship) (3:10:30)

1. schema.prisma. Создание модели Category и связь его с Products (One-to-many)
2. schema.prisma. Создание модели Ingredient и связь его с Products (Many-to-many)
3. schema.prisma. Создание модели ProductItem и связь его с Products (One-to-many)
4. schema.prisma. Создание модели Cart и связь его с User (One-to-one)
5. schema.prisma. Cоздание модели CartItem и связь его с Cart (Many-to-one)
6. schema.prisma. Cоздание модели CartItem и связь его с ProductItem (Many-to-one)
7. schema.prisma. Cоздание модели CartItem и связь его с Ingredient (one-to-many)
8. schema.prisma. Создание типа данных enum UserRole и установлено свойстов role для User, а также два свойства provider, providerId
9. schema.prisma. Cоздание модели Order и связь его с User (many-to-one)
10. schema.prisma. Cоздание модели VerificationCode и связь его с User (one-to-one)
11. package.json. Запускаем команду prisma:push (создается база данных в prisma studio)
12. package.json. Запускаем команду prisma:studio (Запуск панели управления для работы с базой данных)
13. бд. Удалить всех предыдущих user-ов, так как были одинаковые email
14. package.json. Запускаем команду prisma:push (создается база данных в prisma studio)

Пишем скрипт для генерации тестовых данных

15. prisma. Создаем файл под названием seed.ts
16. package.json. Пишем скрипт "prisma:seed": "prisma db seed"
17. package.json. Добавляем свойство "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
    },
18. Терминал. Установить npm i ts-node
19. schema.prisma. Добавлено свойство verified DateTime в модель User
20. package.json. Запускаем команду prisma:push (создается база данных в prisma studio)
21. Терминал. Установить npm i @types/bcrypt bcrypt
22. seed.ts. Создаем функции, которые будут вызываться для очищения, заполнения базы данных
23. package.json. Запускаем команду prisma:seed (очищение, а затем генерация списка пользователей)
24. prisma. Создаем файл constants.ts
25. contants.ts. Создаем категории и экспортируем
26. package.json. Запускаем команду prisma:seed (очищение, а затем генерация базы данных)
27. contants.ts. Создаем ингредиенты, продукты и экспортируем
28. seed.ts. Создаем функции, которые будут вызываться для заполнения ингредиентов
29. seed.ts. Создаем функции для заполнения пиццы
30. seed.ts. Создаем функцию, которая генерирует случайное десятичное число в указанном диапазоне min и max с одним десятичным знаком.
31. seed.ts. Создаем функцию, которая создает объект продукта с заданными характеристиками и случайно сгенерированной ценой.
32. seed.ts. Создаем функции, которые будут вызываться для заполнения ProductItem
33. seed.ts. Дополняем функции для удаления вновь созданной базы данных
34. package.json. Запускаем команду prisma:seed (очищение, а затем генерация базы данных)
35. seed.ts. Создаем функции для заполнения нескольких корзин
36. seed.ts. Создаем функции для заполнения корзины
37. seed.ts. Дополняем функции для удаления Cart, CartItem
38. package.json. Запускаем команду prisma:seed (очищение, а затем генерация базы данных)

Создаем API для ингредиентов (5:15:30)

39. api. Создаем папку ingredients
40. ingredients. Создаем файл route.ts
41. route.ts. Создаем API для получения ингредиентов

Создаем API для продуктов (5:18:30)

42. api. Создаем папку products.
43. products. Создаем папку search
44. search. Создаем файл route.ts
45. route.ts. Создаем API для получения продуктов

Делаем поиск на фронтенде (5:24:30)

46. header.tsx. Добавлен Link из next, который оборачивает div
47. my-app. Создаем папку servives
48. services. Создаем файл constants.ts
49. constants.ts. Определяем перечисление (enum) ApiRoutes, которое содержит ключи для маршрутов API.
50. services. Создаем файл instance.ts
51. Терминал. Установк npm i axios
52. instance.ts Создаем и экспортируем экземпляр axios с настроенным базовым URL
53. services. Создаем файл products.ts
54. products.ts. Описываем метод для поиска наших продуктов
55. services. Создаем файл api-client.ts
56. api-clients.ts Создаем и экспортируем объект Api, который включает в себя все экспортируемые сущности из модуля ./products
57. shared. Создаем файл search-input.tsx
58. search-input.tsx. Создаем компонент, который использует функциональные возможности для создания поля поиска с динамическими результатами

Доделываем модальное окно продукта (5:56:25)  
59. services. Создаем папку ingredients  
60. products.ts. Описываем метод для поиска наших ingredients  
61. services.contants. Добавляем переменную маршрута 'ingredients  
62. api-clients.ts Создаем и экспортируем объект Api, который включает в себя все экспортируемые сущности из модуля ./ingredients 63. components.shared.search-input. Добавление конструкции trycatch, изменения than на async/await  
64. my-app. Создаем папку под названием hooks 64. hooks.  
65. hooks. Создаем файл useFilterIngredients  
66. hooks/useFilterIngredients. Создание хука для получения списка ингредиентов и отображения их в виде списка (try-catch)  
67. components/shared/filters. Добавление хука для получения ingredients  
68. components/shared/checkbox-filters-group. Добавление Skeleton  
69. hooks/useFilterIngredients. Добавление loading  
70. hooks/useFilterIngredients. Добавление useSet  
71. hooks/useFilterIngredients. Переименование state на selectedIds  
72. hooks/useFilterIngredients. Добавление пропса selectedIds: Set<string> в ReturnsProps  
73. hooks/useFilterIngredients. Добавление свойства onAddId: (id: string) => void; в ReturnsProps
