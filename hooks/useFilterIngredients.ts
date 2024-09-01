"use client";

// 66. Создание хука для получения списка ингредиентов и отображения их в виде списка (try-catch)
import { useEffect, useState } from "react";
import { useSet } from "react-use";

// Точка входа всех запросов на бек
import { Api } from "@/services/api-client";

// types and interfaces
import { Ingredient } from "@prisma/client";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // 69. hooks/useFilterIngredients. Добавление loading
  const [loading, setLoading] = useState<boolean>(true);

  // 70. hooks/useFilterIngredients. Добавление useSet
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function getIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getIngredients();
  }, []);

  return { ingredients, loading };
};
