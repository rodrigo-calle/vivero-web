import Image from "next/image";
import styles from "./ReferenceCard.module.css";

interface Props {
  image?: string;
  name: string;
  description: string;
}
const ReferenceCard = (reference: Props) => {
  const imagePath = reference.image || "/user.png";
  return (
    <div className={styles.main}>
      <Image src={imagePath} alt={reference.name} width={50} height={50} />
      <div className={styles["comment-content"]}>
        <p className={styles["comment-content__name"]}>{reference.name}</p>
        <p className={styles["comment-content__description"]}>
          {reference.description}
        </p>
      </div>
    </div>
  );
};

export default ReferenceCard;
