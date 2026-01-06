import mainImage from "@/assets/images/Recipe1.jpg";
import RecipesCard from "../RecipesCard/RecipesCard";

import styles from "./RecipesList.module.scss";
import Button from "../Button/Button";

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
    <>
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
      <div className={`col-2 ${styles.btn}`}>
        <Button
          text="discover more recipes"
          href="/"
        />
      </div>
    </>
  );
};

export default RecipesList;
