import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import RecipesList from "@/components/RecipesList/RecipesList";
import Button from "@/components/Button/Button";
import FreshRecipesList from "@/components/FreshRecipes/FreshRecipesList";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container ">
        <Title
          highlight={[1]}
          italic={[1]}
          title="Authentic recipes"
          subtitle="Try one of our pearl sugar recipe at the comfort of your home.
In the kitchen with waffle pantry."
        />
        <RecipesList />

        <Title
          highlight={[0]}
          italic={[1, 2, 3]}
          title="FRESH OFF THE PRESS"
          subtitle="Try one of our pearl sugar recipe at the comfort of your home.
In the kitchen with waffle pantry."
        />
        <FreshRecipesList />
      </div>
    </>
  );
};

export default Home;
