import { getAllRecipeByCategoryId } from "@/lib/recipes-lib";
import Image from "next/image";
import Link from "next/link";

export default function CategoryRecipePage({ params: { categoryId } }) {
    const categoryRecipes = getAllRecipeByCategoryId(categoryId);
    return (
        <main className="container mx-auto px-4 py-8 mt-[100px]">
            <div className="flex justify-between items-center mb-8">
                {categoryRecipes && <div>
                    <h1 className="text-4xl font-bold mb-2">
                        {categoryRecipes[0].category_name} <span className="text-gray-500 text-2xl font-normal">({categoryRecipes.length} Recipes)</span>
                    </h1>
                    <p className="text-gray-600">
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
                        is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                </div>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    categoryRecipes && categoryRecipes.map(recipe => (
                        <Link href={`/${recipe.category_id}/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image src={`/assets/thumbs/${recipe.thumbnail}`} alt={recipe.id}
                                className="w-full h-48 object-cover" width={100} height={192}/>
                            <div className="p-4">
                                <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </main>
    )
}