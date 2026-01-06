import mainImage from "@/assets/images/Recipe1.jpg";
import RecipesCard from "../RecipesCard/RecipesCard";

import styles from './RecipesList.module.scss'

const recipes = [
  {
    image: mainImage,
    title: "traditional liege waffle",
    time: "45 min",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry.",
    rating: 3.5,
  },
  {
    image: mainImage,
    title: "traditional liege waffle",
    time: "45 min",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry.",
    rating: 4,
  },
  {
    image: mainImage,
    title: "traditional liege waffle",
    time: "45 min",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry.",
    rating: 5,
  },
];

const RecipesList = () => {
  return (
    <div className={`col-12 ${styles.wrapper}`}>
      {recipes.map((item, index) => (
        <RecipesCard
          key={index}
          mainImage={item.image}
          rating={item.rating}
          title={item.title}
          time={item.time}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default RecipesList