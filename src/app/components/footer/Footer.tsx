import styles from "./Footer.module.css";
import Dropdown from "../dropdown/Dropdown";
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
  const dropdownHandler = () => {};

  return (
    <div className={styles["main"]}>
      <div className={styles["dropdown-list"]}>
        {footerContent.map((item) => {
          return (
            <Dropdown key={item.title} title={item.title} links={item.links} />
          );
        })}
      </div>
      <p className={styles.line}></p>
      <p className={styles["footer-about"]}>
        2023 - Vivero Santo Domingo - Chontabamba - Oxapampa
      </p>
    </div>
  );
};

export default Footer;
