import { ReactNode } from "react";
import styles from "./ServiceCard.module.css";
import { IconType } from "react-icons";

interface Props {
  title: string;
  image: IconType;
  description: string;
}

const ServiceCard = (props: Props) => {
  const { description, image: Icon, title } = props;
  return (
    <div className={styles.main}>
      <div className={styles["icon-container"]}>
        <Icon className={styles["icon"]} />
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
