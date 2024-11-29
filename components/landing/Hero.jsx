import Image from "next/image";
import Link from "next/link";

const Hero = ({ heroRecipe }) => {
    const { thumbnail, description, title, category_id, id } = heroRecipe;
    return (
        <section className="mb-16 bg-orange-50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        src={`/assets/thumbs/${thumbnail}`}
                        alt="Mighty Super Cheesecake"
                        className="w-full h-[450px] object-cover rounded-lg"
                        width={100}
                        height={450}
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <Link
                        href={`/${category_id}/${id}`}
                        className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
                    >
                        View Recipe
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
