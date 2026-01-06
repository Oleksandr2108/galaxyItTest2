import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import RecipesList from "@/components/RecipesList/RecipesList";

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
      </div>
    </>
  );
};

export default Home;
