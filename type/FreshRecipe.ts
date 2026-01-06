import { StaticImageData } from "next/image";

export type FreshRecipe = {
  mainImage: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
};
