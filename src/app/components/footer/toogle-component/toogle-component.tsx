import { BsChevronCompactDown } from "react-icons/bs";
import styles from "../Footer.module.css";
import Link from "next/link";

interface Props {
  displayToogle: string;
  setDisplayToogle: (value: boolean) => void;
  item: {
    title: string;
    links: {
      title: string;
      url: string;
    }[];
  };
}

const ToogleComponent = (props: Props) => {
  const { displayToogle, setDisplayToogle, item } = props;
  return (
    <>
      <div
        className={styles["dropdown-list__item"]}
        onClick={() => setDisplayToogle(!displayToogle)}
      >
        <p className={styles["dropdown-list__item-title"]}>{item.title}</p>{" "}
        <BsChevronCompactDown className={styles.icon} />
      </div>
      <div className={styles["submenu-dropdown"]}>
        {displayToogle === item.title &&
          item.links.map((submenu, submenuKey) => (
            <Link key={submenuKey} href={submenu.url} className={styles["dropdown-submenu__list-item"]}>
              <li>{submenu.title}</li>
            </Link>
          ))}
      </div>
    </>
  );
};

export default ToogleComponent;
