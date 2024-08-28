"use client";

import React from "react";

//type
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

// components
import { Input } from "../ui/input";

// определение типов и интерфейсов
type Item = FilterCheckboxProps;

interface IProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFilterGroup: React.FC<IProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  // showAll: состояние для управления, показывать ли все фильтры или только те, которые по умолчанию.
  const [showAll, setShowAll] = React.useState<boolean>(false);
  // searchValue: состояние для хранения текущего значения поиска.
  const [searchValue, setSearchValue] = React.useState<string>("");

  // onChangeSearchInput: функция, которая обновляет searchValue, когда пользователь вводит текст в поле поиска.
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // list: определяет, какие элементы отображать. Если showAll истинно, то отображаются все элементы, отфильтрованные по searchValue. В противном случае показываются только defaultItems, ограниченные limit.
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={(id) => console.log(id)}
            checked={false}
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
