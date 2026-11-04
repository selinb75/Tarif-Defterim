import { useState, useEffect } from "react";
import { loadRecipes, saveRecipes } from "../utils/storage.js";

function useRecipes() {
  // HAFIZALAR
  const [recipes, setRecipes] = useState(() => loadRecipes() ?? []);
  const [loading, setLoading] = useState(() => loadRecipes() === null);
  const [error, setError] = useState("");

  // Sayfa ilk açılınca bir kez çalışır
  useEffect(() => {
    // Kayıtlı tarif varsa API'ye gitmeye gerek yok
    if (loadRecipes() !== null) return;

    fetch("https://dummyjson.com/recipes?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        saveRecipes(data.recipes);
      })
      .catch(() => setError("Tarifler yüklenemedi."))
      .finally(() => setLoading(false));
  }, []);

  // CREATE: yeni tarifi başa ekle
  const addRecipe = (data) => {
    const yeniListe = [{ ...data, id: Date.now() }, ...recipes];
    setRecipes(yeniListe);
    saveRecipes(yeniListe);
  };

  // UPDATE: id'si eşleşen tarifi yenisiyle değiştir
  const updateRecipe = (id, data) => {
    const yeniListe = recipes.map((r) => (r.id === id ? { ...r, ...data } : r));
    setRecipes(yeniListe);
    saveRecipes(yeniListe);
  };

  // DELETE: id'si eşleşmeyenleri tut
  const deleteRecipe = (id) => {
    const yeniListe = recipes.filter((r) => r.id !== id);
    setRecipes(yeniListe);
    saveRecipes(yeniListe);
  };

  // Dışarıya (Home'a) vermek istediklerimiz
  return { recipes, loading, error, addRecipe, updateRecipe, deleteRecipe };
}

export default useRecipes;