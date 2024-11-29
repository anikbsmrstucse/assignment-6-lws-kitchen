import allCategories from "../public/data/categories.json";
import { getAllRecipes } from "./recipes-lib";

export function allCategoriesList() {
    return allCategories;
}

const allRecipe = getAllRecipes();
const allCategoriesLists = allCategoriesList();

export function getPopularCategories(value = null) {
    const getCategoryRecipe = allCategoriesLists.map((category) => {
        const recipesInCategory = allRecipe.filter(
            (recipe) => recipe.category_id === category.id
        );

        return {
            ...category,
            recipes: recipesInCategory,
        };
    });

    const sortedCategories = getCategoryRecipe.sort(
        (a, b) => b.recipes.length - a.recipes.length
    );

    const topCategories = value
        ? sortedCategories.slice(0, value)
        : sortedCategories;

    return topCategories;
}
