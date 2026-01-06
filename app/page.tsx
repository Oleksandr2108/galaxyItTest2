import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import RecipesList from "@/components/RecipesList/RecipesList";
import Button from "@/components/Button/Button";
import FreshRecipesList from "@/components/FreshRecipes/FreshRecipesList";
import FreshRecipesSection from "@/components/FreshRecipesSection/FreshRecipesSection";
import SwiperImage from "@/components/SwiperImage/SwiperImage";
import RecipeSection from "@/components/RecipeSection/RecipeSection";

const Home = () => {
  return (
    <>
      <Header />
      <RecipeSection />
      <FreshRecipesSection />
      <SwiperImage />
    </>
  );
};

export default Home;
