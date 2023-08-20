import styles from "./Footer.module.css";
import { BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import ToogleComponent from "./toogle-component/toogle-component";
const Footer = () => {
  const [openToogle, setOpenToogle] = useState<string>("");
  const footerContent = [
    {
      title: "Información",
      links: [
        {
          title: "Nosotros",
          url: "/nosotros",
        },
        {
          title: "Contacto",
          url: "/contacto",
        },
        {
          title: "Preguntas frecuentes",
          url: "/preguntas-frecuentes",
        },
      ],
    },
    {
      title: "Productos",
      links: [
        {
          title: "Plantas Hornamentales",
          url: "/plantas-hornamentales",
        },
        {
          title: "Plantas Forestales",
          url: "/plantas-forestales",
        },
      ],
    },
    {
      title: "Servicios",
      links: [
        {
          title: "Servicio de transporte",
          url: "/servicio-de-transporte",
        },
        {
          title: "Servicio de plantación",
          url: "/servicio-de-plantacion",
        },
      ],
    },
    {
      title: "Contacto",
      links: [
        {
          title: "Correo",
          url: "mailto:",
        },
        {
          title: "Teléfono",
          url: "tel:",
        },
        {
          title: "Whatsapp",
          url: "https://wa.me/",
        },
      ],
    },
  ];

  return (
    <div className={styles["main"]}>
      <div className={styles["dropdown-list"]}>
        {footerContent.map((item) => (
          <ToogleComponent
            key={item.title}
            displayToogle={openToogle}
            item={item}
            setDisplayToogle={() =>
              setOpenToogle(openToogle !== item.title ? item.title : "")
            }
          />
        ))}
      </div>
      <p className={styles.line}></p>
      <p className={styles["footer-about"]}>
        2023 - Vivero Santo Domingo - Chontabamba - Oxapampa
      </p>
    </div>
  );
};

export default Footer;
