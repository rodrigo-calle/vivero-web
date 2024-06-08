import React, { useEffect, useRef } from "react";
import styles from "./HamburguerMenu.module.css";
import Image from "next/image";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  menuList: { name: string; url: string }[];
};

const HamburguerMenu = ({ open, menuList, setOpen }: Props) => {
  return (
    <div
      className={styles["side-menu"]}
      style={{ display: open ? "flex" : "none" }}
      id="side-menu"
    >
      <div className={styles["side-menu__content"]}>
        <button
          className={styles["close-button"]}
          onClick={() => setOpen(false)}
        >
          <p>X</p>
        </button>
        <h1 className={styles["side-menu-content__title"]}>
          Vivero Santo Domingo
        </h1>
        <ul className={styles["side-menu__content--list"]}>
          {menuList.map((item) => (
            <li className={styles["item"]} key={item.url}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburguerMenu;
