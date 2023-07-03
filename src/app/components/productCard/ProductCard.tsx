import Link from "next/link";
import styles from "./ProductCard.module.css";
enum PlantType {
  HORNAMENTAL = "hornamental",
  FORESTAL = "forestal",
}

interface Props {
  title: string;
  urlPath: string;
  image: string;
  type?: PlantType;
  discount?: number;
  price: number;
}

const ProductCard = (props: Props) => {
  const { title, image, urlPath, discount, price } = props;
  return (
    <Link href={urlPath} className={styles.link}>
      <div className={styles.main}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${image})` }}
        >
          {discount && discount > 0 ? (
            <div className={styles.discount}>
              <p>{discount}%</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>S/.{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
