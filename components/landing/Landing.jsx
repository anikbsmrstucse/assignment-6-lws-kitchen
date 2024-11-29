import { getPopularCategories } from "@/lib/category-lib";
import {
    getAllRecipes,
    getLatestRecipesByDate,
    getSuperDeliciousRecipes,
} from "@/lib/recipes-lib";
import Handpick from "./Handpick";
import Hero from "./Hero";
import Inbox from "./Inbox";
import LatestRecipes from "./LatestRecipes";
import PopularCategories from "./PopularCategories";
import SuperDelicious from "./SuperDelicious";

const Landing = () => {
    const getAllRecipe = getAllRecipes();
    const heroRecipe = getAllRecipe[0];
    const superDeliciousRecipe = getSuperDeliciousRecipes(3);
    const popularCategories = getPopularCategories(6);
    const latestRecipes = getLatestRecipesByDate(4);

    return (
        <>
            <Hero heroRecipe={heroRecipe} />
            <SuperDelicious superDeliciousRecipe={superDeliciousRecipe} />
            <PopularCategories popularCategories={popularCategories} />
            <Inbox />
            <Handpick
                handPickRecipe={getAllRecipe}
                initialValue={6}
                endingValue={8}
            />
            <LatestRecipes latestRecipes={latestRecipes} />
        </>
    );
};

export default Landing;
