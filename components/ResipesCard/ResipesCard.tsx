import Image, { StaticImageData } from "next/image";
import StarRating from "../StarRating/StarRating";

import Time from "@/assets/images/Time.svg";
import Share from "@/assets/images/Vector.svg";

import styles from "./ResipesCard.module.scss";

interface RecipesCardProps {
  mainImage: string | StaticImageData;
  title: string;
  rating: number;
  time: string;
  description: string;
}

const ResipesCard = ({
  mainImage,
  title,
  rating,
  time,
  description,
}: RecipesCardProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={mainImage}
        width={472}
        height={315}
        alt="image result"
      />
      <div className={styles.wrapper__info}>
        <StarRating rating={rating} />

        <span className={styles["wrapper__info-title"]}>{title}</span>

        <div className={styles["wrapper__info-time"]}>
          <Image
            src={Time}
            width={20}
            height={20}
            alt="time icon"
          />
          <p>{time}</p>
        </div>

        <p className={styles["wrapper__info-description"]}>{description}</p>

        <div className={styles["wrapper__info-share"]}>
          <Image
            src={Share}
            width={20}
            height={23}
            alt="share icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ResipesCard;
