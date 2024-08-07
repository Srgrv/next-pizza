// используется для условного объединения CSS-классов, подобно clsx или classnames.
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

// interface IProps { — объявляет интерфейс IProps, который описывает свойства, которые можно передать компоненту TopBar.
interface IProps {
  // className?: string; — необязательное свойство для добавления пользовательских CSS-классов.
  className?: string;
}

export const TopBar: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
