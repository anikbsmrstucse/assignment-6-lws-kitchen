import recipesData from "../public/data/recipes.json";
import { allCategoriesList } from "./category-lib";

export function getAllRecipes() {
    const categoriesList = allCategoriesList();
    return recipesData.map((recipe) => {
        const recipeId = recipe.title.split(" ").join("-").toLowerCase();
        const category = categoriesList.find(
            (cat) => cat.id === recipe.category_id
        );

        return {
            ...recipe,
            category_name: category ? category.name : "Unknown",
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

export function getLatestRecipesByDate(value = 4) {
    const allRecipes = getAllRecipes();
    const latestRecipe = allRecipes.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
    return latestRecipe.slice(0, value);
}
