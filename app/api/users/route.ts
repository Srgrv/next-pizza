// prisma импортируется из модуля @/prisma/prisma-client. prisma: Это экземпляр Prisma Client, который вы создаёте и используете для выполнения запросов к базе данных.
import { prisma } from "@/prisma/prisma-client";
// NextRequest и NextResponse: Эти классы используются для обработки HTTP запросов и ответов в маршрутах API Next.js.
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // метод findMany извлекает все записи из таблицы user в базе данных.
  const users = await prisma.user.findMany();
  // NextResponse.json(users) создаёт HTTP ответ с типом application/json и устанавливает тело ответа равным users.
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
