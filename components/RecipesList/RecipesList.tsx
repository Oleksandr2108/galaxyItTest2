
import RecipesCard from "../RecipesCard/RecipesCard";

import styles from "./RecipesList.module.scss";
import Button from "../Button/Button";
import { Recipe } from "@/type/Resipe";




interface RecipesListProps {
  recipes: Recipe[]
}

const RecipesList = ({recipes}: RecipesListProps) => {
  return (
    <>
      <div className={`col-12 ${styles.wrapper}`}>
        {recipes.map((item, index) => (
          <RecipesCard
            key={index}
            mainImage={item.mainImage}
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
