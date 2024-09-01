// 58. search-input.tsx. Создаем компонент, который использует функциональные возможности для создания поля поиска с динамическими результатами

"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

// components

// icons
import { Search } from "lucide-react";

// utils
import { cn } from "@/lib/utils";

// hooks
import { useClickAway, useDebounce } from "react-use";
import { Api } from "@/services/api-client";

// intefaces and types
import { Product } from "@prisma/client";

interface IProps {
  className?: string;
}

export const SearchInput: React.FC<IProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const [products, setProducts] = useState<Product[]>([]);

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    // 63. components.shared.search-input. Добавление конструкции trycatch, изменения than на async/await
    async () => {
      try {
        Api.products.search(searchQuery).then((items) => {
          setProducts(items);
        });
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          onFocus={() => setFocused(true)}
          type="text"
          placeholder="Найти что поесть"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl  top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                onClick={onClickItem}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
              >
                <img
                  className="rounded-sm"
                  src={product.imageUrl}
                  width={32}
                  height={32}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
