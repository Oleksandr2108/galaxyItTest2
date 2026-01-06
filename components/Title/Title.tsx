import { spawn } from "child_process";
import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  highlight?: number[];
  italic?: number[];
  subtitle?: string;
}

const Title = ({
  title,
  highlight = [],
  italic = [],
  subtitle,
}: TitleProps) => {
  const words = title.split(" ");
  return (
    <>
      <h1 className={`col-12 ${styles.title}`}>
        {words.map((word, index) => {
          const isHighlight = highlight.includes(index);
          const isItalic = italic.includes(index);

          return (
            <span
              key={index}
              className={[
                isHighlight ? styles.highlight : "",
                isItalic ? styles.italic : "",
              ].join(" ")}
            >
              {word}{" "}
            </span>
          );
        })}
      </h1>

      <p className={`col-12 ${styles.subtitle}`}>{subtitle}</p>
    </>
  );
};

export default Title;
