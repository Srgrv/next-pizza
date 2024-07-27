import React from "react";

// функция, которая используется для объединения или управления классами CSS
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

// React.PropsWithChildren<IProps>: Это тип, который включает в себя пропсы из IProps и также автоматически добавляет поддержку дочерних элементов.

export const Container: React.FC<React.PropsWithChildren<IProps>> = ({
  className,
  children,
}) => {
  // cn('mx-auto max-w-[1280px]', className): Функция cn объединяет стандартные классы
  // - mx-auto (центрирование элемента по горизонтали)
  // - max-w-[1280px] (максимальная ширина 1280 пикселей) с классами, переданными через className.
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
};
