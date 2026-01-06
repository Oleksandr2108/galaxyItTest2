import { StaticImageData } from "next/image";

export type Recipe = {
  mainImage: string | StaticImageData;
  title: string;
  rating: number;
  time: string;
  description: string;
};
