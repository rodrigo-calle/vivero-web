import Image from "next/image";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const menuList = [
    {
      name: "Home",
      url: "/",
    },
  ];

  return (
    <nav className={styles.main}>
      <button className={styles["button-responsive"]}>
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
