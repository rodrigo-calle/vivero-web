import { AiOutlineDown } from "react-icons/ai";
import styles from "./Footer.module.css";
import { BsChevronCompactDown } from "react-icons/bs";
const Footer = () => {
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
        {footerContent.map((item) => {
          return (
            <div key={item.title} className={styles["dropdown-list__item"]}>
              <p className={styles["dropdown-list__item-title"]}>
                {item.title}
              </p>{" "}
              <BsChevronCompactDown className={styles.icon} />
            </div>
          );
        })}
      </div>
      <p className={styles.line}></p>
      <p className={styles["footer-about"]}>2023 - Vivero Santo Domingo - Chontabamba - Oxapampa</p>
    </div>
  );
};

export default Footer;
