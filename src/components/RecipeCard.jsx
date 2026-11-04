function RecipeCard({ recipe, onDelete, onEdit }) {
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
      <button className="btn-edit" onClick={() => onEdit(recipe)}>
        Düzenle
      </button>
      <button onClick={handleDelete}>Sil</button>
    </article>
  );
}

export default RecipeCard;