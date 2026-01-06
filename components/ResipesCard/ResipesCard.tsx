import Image, { StaticImageData } from "next/image";
import StarRating from "../StarRating/StarRating";

import Time from '@/assets/images/Time.svg'
import Share from "@/assets/images/Vector.svg"

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
    <div>
      <Image src={mainImage}  width={472} height={315} alt="image result"/>
      <div>
        {/* Stars */}
        <StarRating rating={rating} />
        {/* Title */}
        <span>{title}</span>
        {/* Time */}
        <div> 
          <Image src={Time} width={20} height={20}  alt="time icon"/>
          <p>{time}</p>
        </div>

        {/* Description */}
        <p>{description}</p>

        {/* LinkIcon */}
        <div>

        <Image src={Share} width={20} height={23} alt="share icon" />
        </div>
      </div>
    </div>
  );
};

export default ResipesCard;
