//  импортирует библиотеку clsx, которая используется для условного объединения CSS-классов.
import clsx from "clsx";
import React from "react";

// type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; — определяет тип TitleSize, который может принимать одно из перечисленных значений: "xs", "sm", "md", "lg", "xl", "2xl". Это ограничивает возможные значения для размера заголовка.
type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// объявляет интерфейс Props, который описывает свойства, которые можно передать компоненту Title.
interface Props {
  // size?: TitleSize; — необязательное свойство, которое определяет размер заголовка. Тип значения — TitleSize.
  size?: TitleSize;
  // className?: string; — необязательное свойство для добавления пользовательских CSS-классов.
  className?: string;
  // text: string; — обязательное свойство, которое содержит текст заголовка.
  text: string;
}

//export const Title: React.FC<Props> = ({ text, size = "sm", className }) => { — экспортирует функциональный компонент Title, который принимает свойства типа Props. Значение size по умолчанию установлено в "sm".
export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
  // const mapTagBySize = { ... } as const; — создаёт объект, который отображает размеры заголовка на соответствующие HTML-теги (h1, h2, h3, h4, h5). Использование as const делает этот объект неизменным и его значения строго типизированными.
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;

  // const mapClassNameBySize = { ... } as const; — создаёт объект, который отображает размеры заголовка на соответствующие CSS-классы с размерами шрифта. С помощью as const обеспечивается неизменность и строгое типизирование объекта.
  const mapClassNameBySize = {
    xs: "text-[16px]",
    sm: "text-[22px]",
    md: "text-[26px]",
    lg: "text-[32px]",
    xl: "text-[40px]",
    "2xl": "text-[48px]",
  } as const;

  // mapTagBySize[size], — выбирает HTML-тег для заголовка на основе значения size (например, h1, h2 и т.д.).

  // { className: clsx(mapClassNameBySize[size], className) }, — передаёт объект с CSS-классами для элемента. clsx объединяет класс для размера из mapClassNameBySize и пользовательский класс className, если он есть.

  // text — передаёт текст заголовка как дочерний элемент.

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], className) },
    text
  );
};
