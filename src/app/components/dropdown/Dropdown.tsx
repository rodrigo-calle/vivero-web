import { BsChevronCompactDown } from "react-icons/bs";
import styles from "./Dropdown.module.css";
import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  links: { title: string; url: string }[];
}

const Dropdown = (props: Props) => {
  const { title, links } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div key={title}>
      <div
        className={styles["dropdown-list__item"]}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <p className={styles["dropdown-list__item-title"]}>{title}</p>{" "}
        <BsChevronCompactDown className={styles.icon} />
      </div>
      {isOpen &&
        links.map((link) => {
          return (
            <div key={link.title} className={styles["links-container"]}>
              <Link href={link.url} className={styles.link}>
                {link.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Dropdown;
