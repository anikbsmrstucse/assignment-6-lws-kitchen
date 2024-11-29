import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const SuperDelicious = ({ superDeliciousRecipe }) => {
    return (
        <section className="mb-16" id="super_delicious">
            <h2 className="text-3xl font-bold mb-8 font-playfair">
                Super Delicious
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {superDeliciousRecipe &&
                    superDeliciousRecipe.map((deliciousRecipe) => (
                        <Link
                            href={`/${deliciousRecipe.category_id}/${deliciousRecipe.id}`}
                            key={deliciousRecipe.id}
                        >
                            <Image
                                src={`/assets/thumbs/${deliciousRecipe.thumbnail}`}
                                alt={deliciousRecipe.id}
                                className="w-full h-[300px] object-cover rounded-lg mb-4"
                                width={100}
                                height={300}
                            />
                            <h3 className="text-xl font-semibold mb-2 font-playfair">
                                {deliciousRecipe.title}
                            </h3>
                            <div className="flex items-center text-yellow-500 mb-2">
                                <Rating
                                    rating={Math.round(
                                        deliciousRecipe.rating.average_rating
                                    )}
                                />
                            </div>
                            <p className="text-gray-600">
                                {deliciousRecipe.cooking_time}
                            </p>
                        </Link>
                    ))}
            </div>
        </section>
    );
};

export default SuperDelicious;
