import Image from "next/image";
import Link from "next/link";

const PopularCategories = ({ popularCategories }) => {
    return (
        <section className="mb-16">
            <div className="flex justify-between items-top">
                <h2 className="text-3xl font-bold mb-8 font-playfair">
                    Popular Categories
                </h2>
                <Link href="/categories" className="text-orange-500">
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {popularCategories &&
                    popularCategories.map((category) => (
                        <Link
                            href={`/${category.id}`}
                            className="cursor-pointer text-center group"
                            key={category.id}
                        >
                            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                                <Image
                                    src={`/assets${category.image}`}
                                    alt={`${category.name}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    width={500}
                                    height={100}
                                    priority
                                />
                            </div>
                            <p className="transition-transform duration-300 group-hover:scale-105">
                                {category.name}
                            </p>
                        </Link>
                    ))}
            </div>
        </section>
    );
};

export default PopularCategories;
