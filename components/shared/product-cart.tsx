// Link из next/link используется для создания ссылок, которые позволяют навигацию между страницами в приложении Next.js.
import Link from "next/link";
import React from "react";

// components
import { Title } from "./title";
import { Button } from "../ui/button";

// icons
import { Plus } from "lucide-react";

interface IProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<IProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div>
      {/* Ссылка ведет на маршрут /product/${id}, где ${id} заменяется на значение свойства id, переданное в компонент. */}
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px] " src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">Цыпленок,Моцарелла</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} Р</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
