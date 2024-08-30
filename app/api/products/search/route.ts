import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

// 44. route.ts. Создаем API для получения продуктов
export async function GET(req: NextRequest) {
  // const query = req.nextUrl.searchParams.get("query") || "";
  const query = (req.nextUrl.searchParams.get("query") || "").trim();

  console.log(query);

  const products = await prisma.product.findMany();

  const filteredProducts = query
    ? products
        .filter((product) => product.name.toLocaleLowerCase().includes(query))
        .slice(0, 5)
    : products.slice(0, 5);

  // const products = await prisma.product.findMany({
  //   where: {
  //     name: {
  //       contains: query.toLowerCase(),
  //       mode: "insensitive",
  //     },
  //   },
  //   take: 5,
  // });

  console.log(filteredProducts);

  return NextResponse.json(filteredProducts);
}
