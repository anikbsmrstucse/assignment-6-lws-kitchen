import RecipeDetails from "@/components/blog/RecipeDetails";
import { getRecipeByTitle } from "@/lib/recipes-lib";

export default function SingleRecipePage({params:{recipeId}}) {
    console.log(recipeId)
    const recipe = getRecipeByTitle(recipeId)
    console.log({recipe})
    return (
        <main class="px-4 py-8">
            <RecipeDetails recipe={recipe}/>
        </main>
    )
}