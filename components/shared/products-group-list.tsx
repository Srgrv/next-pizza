"use client";

import React from "react";

// useIntersection из react-use — хук для отслеживания видимости элемента на экране.
import { useIntersection } from "react-use";

// useCategoryStore — хук для работы с состоянием категории из вашего Zustand стора.
import { useCategoryStore } from "@/store/category";

// utils
import { cn } from "@/lib/utils";

// components
import { Title } from "./title";
import { ProductCard } from "./product-cart";

interface IProps {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<IProps> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  // intersectionRef — реф, который привязывается к элементу для отслеживания его видимости.
  const intersectionRef = React.useRef(null);
  // useIntersection — хук для отслеживания видимости элемента относительно окна просмотра (viewport). threshold: 1 означает, что элемент должен быть полностью видим (100%), чтобы событие сработало.
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
