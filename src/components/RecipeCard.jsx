import { useState } from "react";
import { createPortal } from "react-dom";

function RecipeCard({ recipe, onDelete, onEdit }) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`"${recipe.name}" tarifi silinsin mi?`)) {
      onDelete(recipe.id);
    }
  };

  return (
    <article>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>
        {recipe.cuisine} · {recipe.prepTimeMinutes} dk · {recipe.difficulty}
      </p>
    <div className="kart-butonlar">
  <button onClick={() => setOpen(true)}>İncele</button>
  <button className="btn-edit" onClick={() => onEdit(recipe)}>
    Düzenle
  </button>
  <button onClick={handleDelete}>Sil</button>
</div>

      {open &&
        createPortal(
          <div className="modal-arka" onClick={() => setOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-kapat" onClick={() => setOpen(false)}>
                ✕
              </button>
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
              <p>
                {recipe.cuisine} · {recipe.prepTimeMinutes} dk ·{" "}
                {recipe.difficulty}
              </p>

              <h3>Malzemeler</h3>
              <ul>
                {recipe.ingredients.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>

              <h3>Yapılışı</h3>
              <ol>
                {recipe.instructions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ol>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
}

export default RecipeCard;
