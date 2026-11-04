import RecipeCard from "./RecipeCard.jsx";

function RecipeList({ recipes, onDelete, onEdit }) {  if (recipes.length === 0) {
    return <p>Henüz tarif yok.</p>;
  }

  return (
    <div className="grid"> 
      {recipes.map((recipe) => ( //her tarfin (recipe.id) kendi id si var 
        <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} onEdit={onEdit} /> //map, listedeki her eleman için bir şey üretir. Burada her tarif için bir <RecipeCard> üretiyor. 3 tarif varsa 3 kart, 100 tarif varsa 100 kart çıkar, kod aynı kalır.
      ))}     
    </div>
  );
}

export default RecipeList;