import { cn } from "@/lib/utils";
import React from "react";

// components
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";

// icons
import { ArrowRight, CircleUserRound, ShoppingCart } from "lucide-react";

interface IProps {
  className?: string;
}

export const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть*/}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>
        {/* Правая часть*/}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <CircleUserRound size={16} />
            Войти
          </Button>
          {/*group: Это класс позволяет применять стили к дочерним элементам при наведении курсора на данный контейнер*/}
          {/*relative: Относительное позиционирование для того, чтобы дочерние элементы могли быть позиционированы относительно этого контейнера*/}
          <div className="group relative">
            <Button>
              <b>520 ₽</b>
              {/*bg-white/30: Белый цвет с 30% непрозрачностью. */}
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              {/*transition duration-300: Плавный переход длительностью 300 миллисекунд. */}
              {/*group-hover:opacity-0: Элемент станет невидимым при наведении курсора на родительский контейнер.*/}
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
