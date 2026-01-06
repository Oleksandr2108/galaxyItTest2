"use client";
import { useState } from "react";
import FreshRecipesList from "../FreshRecipes/FreshRecipesList";
import Title from "../Title/Title";
import styles from "./FreshRecipesSection.module.scss";
import mainImage from "@/assets/images/freshRecipes1.jpg";
import mainImage2 from "@/assets/images/freshRecipes2.jpg";

const recipes = [
  {
    mainImage: mainImage,
    title: "traditional liege waffle",
    subtitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
  {
    mainImage: mainImage,
    title: "traditional liege waffle",
    subtitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
  {
    mainImage: mainImage,
    title: "traditional liege waffle",
    subtitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
];

const PopularRecipes = [
  {
    mainImage: mainImage2,
    title: "traditional liege waffle",
    subtitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
  {
    mainImage: mainImage2,
    title: "traditional liege waffle",
    subtitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
  {
    mainImage: mainImage2,
    title: "traditional liege waffle",
    subtitle: "Name of the press",
    description:
      "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    slug: "/",
  },
];

const FreshRecipesSection = () => {
  const [activeTab, setActiveTab] = useState<"recent" | "popular">("recent");
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__header}>
        <div
          className={
            activeTab === "recent"
              ? styles["wrapper__header-recent"]
              : styles["wrapper__header-recentActive"]
          }
          onClick={() => setActiveTab("recent")}
        >
          <p>RECENT</p>
        </div>
        <div
          className={
            activeTab === "popular"
              ? styles["wrapper__header-popular"]
              : styles["wrapper__header-popularActive"]
          }
          onClick={() => setActiveTab("popular")}
        >
          <p>POPULAR</p>
        </div>
      </div>

      <div className="container">
        <Title
          highlight={[0]}
          italic={[1, 2, 3]}
          title="FRESH OFF THE PRESS"
          subtitle="Try one of our pearl sugar recipe at the comfort of your home.
In the kitchen with waffle pantry."
        />
        <FreshRecipesList
          recipes={activeTab === "recent" ? recipes : PopularRecipes}
        />
      </div>
    </div>
  );
};

export default FreshRecipesSection;
