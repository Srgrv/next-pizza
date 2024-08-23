// Zustand — это библиотека для управления состоянием в React-приложениях. Она предлагает простой и эффективный способ работы с глобальным состоянием.

// Импорт функции create из библиотеки Zustand
import { create } from "zustand";

// Интерфейс описывает структуру состояния и функции, которые будут использоваться в Zustand хранилище.
interface State {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

// create<State>() — это вызов функции create с типом State. Этот тип указывает Zustand, какое состояние будет храниться в хранилище
// После вызова create<State>(), вы передаете функцию, которая описывает начальное состояние и методы для его изменения. Эта функция принимает функцию set в качестве аргумента.
export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
