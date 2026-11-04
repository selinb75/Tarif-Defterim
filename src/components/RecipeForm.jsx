import { useState } from "react";
import { bosTarif } from "../interfaces/recipe.js";

// Tarif nesnesini form alanlarına çevirir (listeler -> satır satır yazı)
function toForm(recipe) {
  return {
    name: recipe.name,
    image: recipe.image,
    cuisine: recipe.cuisine,
    prepTimeMinutes: recipe.prepTimeMinutes,
    difficulty: recipe.difficulty,
    ingredients: recipe.ingredients.join("\n"),
    instructions: recipe.instructions.join("\n"),
  };
}

// Textarea yazısını listeye çevirir (boş satırları atar)
function toLines(text) {
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function RecipeForm({ editing, onSubmit, onCancel }) {
  const [form, setForm] = useState(toForm(editing ?? bosTarif));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("Tarif adını yazmalısın.");
      return;
    }

    onSubmit({
      name: form.name.trim(),
      image: form.image.trim(),
      cuisine: form.cuisine.trim(),
      prepTimeMinutes: Number(form.prepTimeMinutes) || 0,
      difficulty: form.difficulty,
      ingredients: toLines(form.ingredients),
      instructions: toLines(form.instructions),
    });

    // Yeni tarif eklendiyse formu temizle
    if (!editing) setForm(toForm(bosTarif));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Tarifi düzenle" : "Yeni tarif ekle"}</h2>

      <label>
        Tarif adı
        <input name="name" value={form.name} onChange={handleChange} />
      </label>

      <label>
        Resim linki
        <input name="image" value={form.image} onChange={handleChange} />
      </label>

      <label>
        Mutfak
        <input name="cuisine" value={form.cuisine} onChange={handleChange} />
      </label>

      <label>
        Hazırlık süresi (dk)
        <input
          type="number"
          name="prepTimeMinutes"
          value={form.prepTimeMinutes}
          onChange={handleChange}
        />
      </label>

      <label>
        Zorluk
        <select
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
        >
          <option value="Easy">Kolay</option>
          <option value="Medium">Orta</option>
          <option value="Difficult">Zor</option>
        </select>
      </label>

      <label>
        Malzemeler (her satıra bir tane)
        <textarea
          name="ingredients"
          rows="4"
          value={form.ingredients}
          onChange={handleChange}
        />
      </label>

      <label>
        Yapılışı (her satıra bir adım)
        <textarea
          name="instructions"
          rows="4"
          value={form.instructions}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        {editing ? "Değişiklikleri kaydet" : "Tarifi ekle"}
      </button>

      {editing && (
        <button type="button" onClick={onCancel}>
          Vazgeç
        </button>
      )}
    </form>
  );
}

export default RecipeForm;