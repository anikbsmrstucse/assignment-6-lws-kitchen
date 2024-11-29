import Image from "next/image";
import Link from "next/link";

const LatestRecipes = ({ latestRecipes }) => {
    return (
        <section className="mb-16" id="latest-recipes">
            <h2 className="text-3xl font-bold mb-8 font-playfair">
                Latest Recipes
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
                {latestRecipes &&
                    latestRecipes.map((recipe) => (
                        <div key={recipe.id}>
                            <Image
                                src={`/assets/thumbs/${recipe.thumbnail}`}
                                alt="Strawberry Cream"
                                className="w-full h-[300px] object-cover rounded-lg mb-4"
                                width={100}
                                height={300}
                            />
                            <Link href={`/${recipe.category_id}/${recipe.id}`}>
                                <h3 className="text-lg font-semibold mb-2 font-playfair">
                                    {recipe.title}{" "}
                                </h3>
                            </Link>
                            <p className="text-gray-600">
                                {recipe.category_name}
                            </p>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default LatestRecipes;
