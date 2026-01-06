import Header from "@/components/Header/Header";
import ResipesCard from "@/components/ResipesCard/ResipesCard";
import Title from "@/components/Title/Title";
import mainImage from "@/assets/images/Recipe1.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <ResipesCard
        mainImage={mainImage}
        rating={2.5}
        title="traditional liege waffle"
        time="45 min"
        description="Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry."
      />
    </>
  );
};

export default Home;
