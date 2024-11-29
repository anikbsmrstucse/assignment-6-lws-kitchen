import Image from "next/image";
import Link from "next/link";

const Handpick = ({ handPickRecipe, initialValue = 0, endingValue = 2 }) => {
    const recipes = handPickRecipe.slice(initialValue, endingValue);
    return (
        <section className="mb-16" id="handpicked">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in-down font-playfair">
                Hand-Picked Collections
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {recipes &&
                    recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
                        >
                            <Link href={`/${recipe.category_id}/${recipe.id}`}>
                                <Image
                                    src={`/assets/thumbs/${recipe.thumbnail}`}
                                    alt="Sushi Combos"
                                    className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                    width={100}
                                    height={400}
                                />
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                                <h3 className="text-xl font-semibold mb-2 font-playfair">
                                    {recipe.title}
                                </h3>
                                <Link
                                    href={`/${recipe.category_id}`}
                                    className="text-orange-300 hover:underline"
                                >
                                    View Collection
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Handpick;
