const KEY = "tarifler";

// LocalStorage'dan tarifleri okur. Kayıt yoksa null döner.
export function loadRecipes() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw === null ? null : JSON.parse(raw);
  } catch {
    return null;
  }
}

// Tarifleri LocalStorage'a yazar.
export function saveRecipes(recipes) {
  try {
    localStorage.setItem(KEY, JSON.stringify(recipes));
  } catch {
    // Hafıza doluysa ya da kapalıysa uygulama yine de çalışsın
  }
}