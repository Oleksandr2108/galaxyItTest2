import Image, { StaticImageData } from 'next/image';
import styles from './FreshRecipesCard.module.scss'
import Link from 'next/link';

interface FreshRecipesCardProps {
  mainImage: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
}



const FreshRecipesCard = ({
  mainImage,
  title,
  subtitle,
  description,
  slug
}:FreshRecipesCardProps) => {
  return (
    <div className={styles.wrapper}>
      
      <Image
        src={mainImage}
        width={472}
        height={315}
        alt="image result"
      />
      <div className={styles.wrapper__info}>
       <div>
        
      

        <p className={styles["wrapper__info-title"]}>{title}</p>
        <p className={styles["wrapper__info-subtitle"]}>{subtitle}</p>

        

        <p className={styles["wrapper__info-description"]}>{description}</p>
</div>
        <Link href={slug} className={styles["wrapper__info-link"]}>
          <span>Read more</span>
        </Link>
      </div>
    </div>
  )
}

export default FreshRecipesCard