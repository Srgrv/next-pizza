"use client";

import React from "react";

// components
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFilterGroup } from "./checkbox-filters-group";

// utils
import { cn } from "@/lib/utils";

// hooks
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

// определение типов и интерфейсов
interface IProps {
  className?: string;
}

export const Filters: React.FC<IProps> = ({ className }) => {
  // 67. Добавление хука для получения ingredients
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={cn("sticky top-[130px]", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Фильтры цен */}

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 500]} />
      </div>

      {/*Поиск ингридиентов*/}

      <CheckboxFilterGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
      />
    </div>
  );
};
