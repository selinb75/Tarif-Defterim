import { useState } from "react";
import RecipeForm from "../components/RecipeForm.jsx";
import RecipeList from "../components/RecipeList.jsx";
import useRecipes from "../hooks/useRecipes.js";

function Home() {
  // Veri ve işlemler hook'tan geliyor
  const { recipes, loading, error, addRecipe, updateRecipe, deleteRecipe } =
    useRecipes();

  // Sadece ekranı ilgilendiren hafıza: hangi tarif düzenleniyor?
  const [editing, setEditing] = useState(null);

  const startEdit = (recipe) => {
    setEditing(recipe);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Form gönderilince: düzenleme mi, ekleme mi?
  const handleSubmit = (data) => {
    if (editing) {
      updateRecipe(editing.id, data);
      setEditing(null);
    } else {
      addRecipe(data);
    }
  };

  return (
    <div>
      <h1>Tarif Defterim🥗🍝🍜</h1>
      <RecipeForm
        key={editing ? editing.id : "yeni"}
        editing={editing}
        onSubmit={handleSubmit}
        onCancel={() => setEditing(null)}
      />
      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <RecipeList
          recipes={recipes}
          onDelete={deleteRecipe}
          onEdit={startEdit}
        />
      )}
    </div>
  );
}

export default Home;