import Image from "next/image";
import Link from "next/link";

export default function AllCategory({ allCategories }) {
    return (
        <main className="container mx-auto px-4 py-8 mt-[100px]">
            <h1 className="text-5xl font-bold mb-12 font-playfair">Categories</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {
                    allCategories && allCategories.map(category => (
                    <Link href={`/${category.id}`} key={category.id} className="text-center">
                        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
                            <Image src={`/assets${category.image}`} alt={`${category.name}`}
                                className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110" width={100} height={100} />
                        </div>
                        <h2 className="text-xl font-semibold font-playfair">{category.name}</h2>
                    </Link>
                    ))
                }
            </div>



        </main>
    );
}
