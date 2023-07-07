import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.main}>
      <div className={styles["banner-content"]}>
        <p className={styles.subtitle}>30% de descuento</p>
        <p className={styles.title}>En plantas de interiores</p>
        <button className={styles.button}>Ver más</button>
      </div>
    </div>
  );
};

export default Banner;
