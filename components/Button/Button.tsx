import Image from 'next/image'
import styles from './Button.module.scss'
import Arrow from '@/assets/images/arrow.svg'
import BtnBack from  '@/assets/images/btnback.svg'
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({text, href}:ButtonProps) => {
  return (
    <Link href={href} className={`${styles.wrapper} col-2`}>
      <div className={styles.wrapper__flex}>
        <span className={styles['wrapper__flex-text']}>{text}</span>
        <Image src={Arrow} width={8} height={14} alt='' className={styles['wrapper__flex-arrow']} />
      <Image src={BtnBack} width={70} height={70} alt='' className={styles['wrapper__back']} />
      </div>

    </Link>
  )
}

export default Button