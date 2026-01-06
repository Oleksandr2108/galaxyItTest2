import Button from "../Button/Button";
import FreshRecipesCard from "./FreshRecipesCard";
import styles from "./FreshRecipesList.module.scss";
import mainImage from "@/assets/images/freshRecipes1.jpg";
const recipes = [
  {
    image: mainImage,
    title: "traditional liege waffle",
    suptitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
  {
    image: mainImage,
    title: "traditional liege waffle",
    suptitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
  {
    image: mainImage,
    title: "traditional liege waffle",
    suptitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
];

const FreshRecipesList = () => {
  return (
    <>
      <div className={`col-12 ${styles.wrapper}`}>
        {recipes.map((item, index) => (
          <FreshRecipesCard
            key={index}
            mainImage={item.image}
            subtitle={item.suptitle}
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
