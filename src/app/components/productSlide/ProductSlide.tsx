import { url } from "inspector";
import styles from "./ProductSlide.module.css";
import Link from "next/link";
interface Props {
  title: string;
  urlPath: string;
  image: string;
}

const ProductSlide = (props: Props) => {
  const { title, image, urlPath } = props;
  return (
    <div className={styles.main} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <Link href={urlPath} className={styles.link}> 
            COMPRAR AHORA
        </Link>
      </div>
    </div>
  );
};

export default ProductSlide;
