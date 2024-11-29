import { getPopularCategories } from "@/lib/categoey-lib";
import { getAllRecipes, getSuperDeliciousRecipes } from "@/lib/recipes-lib";
import Hero from "./Hero";
import PopularCategories from "./PopularCategories";
import SuperDelicious from "./SuperDelicious";

const Landing = () => {
    const getAllRecipe = getAllRecipes();
    const heroRecipe = getAllRecipe[0];
    const superDeliciousRecipe = getSuperDeliciousRecipes(3);
    const popularCategories = getPopularCategories(6);

    return (
        <>
            <Hero heroRecipe={heroRecipe} />
            <SuperDelicious superDeliciousRecipe={superDeliciousRecipe} />
            <PopularCategories popularCategories={popularCategories} />
        </>
    );
};

export default Landing;
