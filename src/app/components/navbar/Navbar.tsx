import Image from "next/image";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import HamburguerMenu from "../hamburguerMenu/HamburguerMenu";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuList = [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Productos",
      url: "/productos",
    },
    {
      name: "Servicios",
      url: "/servicios",
    },
    {
      name: "Nosotros",
      url: "/nosotros",
    },
    {
      name: "Contacto",
      url: "/contacto",
    },
  ];

  return (
    <nav className={styles.main}>
      <HamburguerMenu open={open} setOpen={setOpen} menuList={menuList} />
      <button
        className={styles["button-responsive"]}
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu className={styles["general-icon"]} />
      </button>
      <div className={styles.logo}>
        <Image
          src="/descarga.jpeg"
          alt="logo"
          width={40}
          height={40}
          className={styles["image-logo"]}
        />
      </div>
      <div className={styles["handlers-container"]}>
        <AiOutlineSearch className={styles["general-icon"]} />
        <AiOutlineUser className={styles["general-icon"]} />
        <AiOutlineShopping className={styles["general-icon"]} />
      </div>
    </nav>
  );
};

export default Navbar;
