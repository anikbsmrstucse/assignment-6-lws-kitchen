import AllCategory from "@/components/category/AllCategory";
import { getPopularCategories } from "@/lib/category-lib";

const CategoriesPage = () => {
    const allCategories = getPopularCategories();
    return <AllCategory allCategories={allCategories}/>;
};

export default CategoriesPage;
