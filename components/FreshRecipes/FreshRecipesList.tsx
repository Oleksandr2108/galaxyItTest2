import { FreshRecipe } from "@/type/FreshRecipe";
import Button from "../Button/Button";
import FreshRecipesCard from "./FreshRecipesCard";
import styles from "./FreshRecipesList.module.scss";



interface FreshRecipesListProps {
  recipes: FreshRecipe[]
}

const FreshRecipesList = ({recipes}:FreshRecipesListProps) => {
  return (
    <>
      <div className={`col-12 ${styles.wrapper}`}>
        {recipes.map((item, index) => (
          <FreshRecipesCard
            key={index}
            mainImage={item.mainImage}
            subtitle={item.subtitle}
            title={item.title}
            slug={item.slug}
            description={item.description}
          />
        ))}
      </div>
      <div className={`col-2 ${styles.btn}`}>
        <Button
          text="discover more "
          href="/"
        />
      </div>
    </>
  );
};

export default FreshRecipesList;
