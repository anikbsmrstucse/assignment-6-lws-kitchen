import Image from "next/image";
import Link from "next/link";

export default function RecipeLikeSection({ categoryWiseRecipes }) {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-8 font-playfair">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categoryWiseRecipes && categoryWiseRecipes.map(recipe => (
                    <Link href={`/${recipe.category_id}/${recipe.id}`} key={recipe.id}>
                        <Image src={`/assets/thumbs/${recipe.thumbnail}`} alt="recipe" className="w-full h-60 object-cover rounded-lg mb-2" width={1000} height={100} />
                        <h3 className="font-semibold font-playfair">Strawberries and Cream Cake</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}