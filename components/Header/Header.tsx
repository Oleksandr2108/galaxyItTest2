import Image from "next/image";
import styles from "./header.module.scss";
import Logo from "@/assets/images/Logo.svg";
import Link from "next/link";
import CustomInput from "../CustomInput/CustomInput";
import Bascket from "@/assets/images/bascket.svg";
import SignIcon from "@/assets/images/signIn.svg";
import Flag from '@/assets/images/Flag.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <svg
        className={styles.header__wave}
       
        viewBox="0 0 1920 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-2 0H1924V35H292.519C265.534 35 241.447 52.0777 232.431 77.5119C212.38 134.08 132.208 134.234 112.394 77.5825C103.474 52.0787 79.4067 35 52.388 35H8C2.47715 35 -2 30.5228 -2 25V0Z"
          fill="#F7F7F7"
        />
      </svg>

      <div className="container">
        <nav className={`${styles.header__mainMenu} col-12 `}>
          <Link
            className={`${styles["header__mainMenu-first"]} ${styles["header__mainMenu-link"]}`}
            href={"/"}
          >
            Wholesale
          </Link>
          <Link
            className={styles["header__mainMenu-link"]}
            href={"/"}
          >
            Recipes
          </Link>
          <Link
            className={styles["header__mainMenu-link"]}
            href={"/"}
          >
            Blog
          </Link>
          <Link
            className={`${styles["header__mainMenu-last"]} ${styles["header__mainMenu-link"]}`}
            href={"/"}
          >
            FAQ
          </Link>
        </nav>
        <div className={`${styles.header__top} col-12`}>
          <div className={styles.header__wrapper}>
            <div className="flex">
              <div className={styles.header__logo}>
                <Image
                  src={Logo}
                  alt="logo"
                  width={93}
                  height={80}
                />
                <Image
                  src={Flag}
                  alt="logo"
                  width={57}
                  height={37}
                  className={styles.header__flag}
                />


              </div>

              <nav className={styles.header__navMenu}>
                <Link href={"/"}>Belgian Pearl Sugar</Link>
                <Link href={"/"}>Liege Waffle Mix</Link>
                <Link href={"/"}>Waffle Maker</Link>
              </nav>
            </div>
            <div className={styles.header__buttons}>
              <CustomInput />
              <Link href={"/"}>
                <Image
                  src={Bascket}
                  width={24}
                  height={24}
                  alt="basket link"
                />
              </Link>
              <Link
                href={"/"}
                className={styles["header__buttons-signIn"]}
              >
                <Image
                  src={SignIcon}
                  width={18}
                  height={21}
                  alt="basket link"
                />
                <span className={styles["header__buttons-text"]}>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
