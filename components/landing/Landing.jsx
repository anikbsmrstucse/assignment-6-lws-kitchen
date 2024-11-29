import { getAllRecipes, getSuperDeliciousRecipes } from "@/lib/recipes-lib";
import Hero from "./Hero";
import SuperDelicious from "./SuperDelicious";

const Landing = () => {
    const getAllRecipe = getAllRecipes();
    const heroRecipe = getAllRecipe[0];
    const superDeliciousRecipe = getSuperDeliciousRecipes(3);
    return (
        <>
            <Hero heroRecipe={heroRecipe} />
            <SuperDelicious superDeliciousRecipe={superDeliciousRecipe} />
        </>
    );
};

export default Landing;
