import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

// 41. route.ts. Создаем API для получения ингредиентов

export async function GET() {
  const ingredients = await prisma.ingredient.findMany();
  return NextResponse.json(ingredients);
}
