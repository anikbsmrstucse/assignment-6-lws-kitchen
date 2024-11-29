import recipesData from "../public/data/recipes.json";
export function getAllRecipes() {
    return recipesData.map((recipe) => {
        const recipeId = recipe.title.split(" ").join("-").toLowerCase();
        return {
            ...recipe,
            id: recipeId,
        };
    });
}

export function getSuperDeliciousRecipes(value) {
    const allRecipe = getAllRecipes();
    const deliciousRecipe = allRecipe.sort((a, b) => {
        if (a.rating.rating_count > b.rating.rating_count) {
            return -1;
        }
        return 0;
    });

    return deliciousRecipe.slice(0, value);
}
