import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  // endAdornment?: React.ReactNode; — необязательное свойство, которое может содержать любой React элемент, отображаемый после чекбокса (например, иконки или дополнительный контент).
  endAdornment,
  // необязательное свойство, которое представляет собой функцию-обработчик, вызываемую при изменении состояния чекбокса. Функция принимает булево значение, указывающее, установлен ли чекбокс.
  onCheckedChange,
  checked,
  //необязательное свойство, которое используется для создания уникального идентификатора чекбокса.
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        //  передаёт обработчик изменения состояния чекбокса.
        onCheckedChange={onCheckedChange}
        //  задаёт состояние чекбокса (отмечен или нет).
        checked={checked}
        // задаёт значение чекбокса.
        value={value}
        className="rounded-[8px] w-6 h-6"
        // генерирует уникальный идентификатор для чекбокса, используя свойства name и value.
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
