import RecipeDetails from "@/components/blog/RecipeDetails";
import RecipeLikeSection from "@/components/blog/RecipeLikeSection";
import { getAllRecipeByCategoryId, getRecipeByTitle } from "@/lib/recipes-lib";

export default function SingleRecipePage({ params: { recipeId } }) {
    const recipe = getRecipeByTitle(recipeId)
    const categoryWiseRecipes = getAllRecipeByCategoryId(recipe.category_id).sort(
        (a, b) => b.rating.rating_count - a.rating.rating_count
    ).slice(0, 4);

    return (
        <main className="px-4 py-8">
            <RecipeDetails recipe={recipe} />
            <RecipeLikeSection categoryWiseRecipes={categoryWiseRecipes}/>
        </main>
    )
}