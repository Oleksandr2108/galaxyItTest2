import Image from "next/image";
import styles from "./CustomInput.module.scss";
import Search from "@/assets/images/Search.png";

const CustomInput = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Search"
      />
      <Image
        src={Search}
        width={14}
        height={14}
        alt="search icon"
        className={styles.search__icon}
      />
    </div>
  );
};

export default CustomInput;
