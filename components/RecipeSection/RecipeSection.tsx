import RecipesList from "../RecipesList/RecipesList";
import Title from "../Title/Title";
import mainImage from "@/assets/images/Recipe1.jpg";
import styles from "./RecipeSection.module.scss";

const recipes = [
  {
    mainImage: mainImage,
    title: "traditional liege waffle",
    time: "45 min",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry.",
    rating: 3.5,
  },
  {
    mainImage: mainImage,
    title: "traditional liege waffle",
    time: "45 min",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry.",
    rating: 4,
  },
  {
    mainImage: mainImage,
    title: "traditional liege waffle",
    time: "45 min",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry.",
    rating: 5,
  },
];
const RecipeSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Title
          highlight={[1]}
          italic={[1]}
          title="Authentic recipes"
          subtitle="Try one of our pearl sugar recipe at the comfort of your home.
In the kitchen with waffle pantry."
        />
        <RecipesList recipes={recipes} />
      </div>
    </div>
  );
};

export default RecipeSection;
