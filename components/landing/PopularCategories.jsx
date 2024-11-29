import Image from "next/image";
import Link from "next/link";

const PopularCategories = ({ popularCategories }) => {
    return (
        <section class="mb-16">
            <div class="flex justify-between items-top">
                <h2 class="text-3xl font-bold mb-8 font-playfair">
                    Popular Categories
                </h2>
                <Link href="/categories" class="text-orange-500">
                    View All
                </Link>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
                {popularCategories &&
                    popularCategories.map((category) => (
                        <Link
                            href="/categories"
                            class="cursor-pointer text-center group"
                            key={category.id}
                        >
                            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                                <Image
                                    src={`/assets${category.image}`}
                                    alt={`${category.name}`}
                                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <p class="transition-transform duration-300 group-hover:scale-105">
                                {category.name}
                            </p>
                        </Link>
                    ))}
            </div>
        </section>
    );
};

export default PopularCategories;
