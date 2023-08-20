"use client";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import { PiArrowCircleRight, PiArrowCircleLeft } from "react-icons/pi";
import ServiceCard from "./components/serviceCard/ServiceCard";
import React, { useEffect } from "react";
import PrimaryButton from "./components/buttons/PrimaryButton";
import ProductSlide from "./components/productSlide/ProductSlide";
import { plantData, plantsList, servicesList } from "@/data/testData";
import ProductCard from "./components/productCard/ProductCard";
import "./page.css";
import ReferenceCard from "./components/referenceCard/ReferenceCard";
import Footer from "./components/footer/Footer";

enum ProductsType {
  HORNAMENTAL = "hornamental",
  FORESTAL = "forestal",
}

export default function Home() {
  const [cardPosition, setCardPosition] = React.useState<number>(0);
  const [slidePosition, setSlidePosition] = React.useState<number>(0);
  const [products, setProducts] = React.useState(
    plantsList.filter((plant) => plant.type === "hornamental")
  );
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [slides, setSlides] = React.useState(plantData);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  const handlerCardPosition = (position: "back" | "next") => {
    if (position === "back") {
      if (cardPosition === 0) {
        setCardPosition(2);
      } else {
        setCardPosition(cardPosition - 1);
      }
    }
    if (position === "next") {
      if (cardPosition === 2) {
        setCardPosition(0);
      } else {
        setCardPosition(cardPosition + 1);
      }
    }
  };
  const currentService = [servicesList[cardPosition]];
  const handlerSlides = (position: "back" | "next") => {
    if (position === "back") {
      if (slidePosition === 0) {
        setSlidePosition(1);
      } else {
        setSlidePosition(slidePosition - 1);
      }
    }
    if (position === "next") {
      if (slidePosition === 1) {
        setSlidePosition(0);
      } else {
        setSlidePosition(slidePosition + 1);
      }
    }
  };

  const handlerProductsFilter = (productsFilter: ProductsType) => {
    if (productsFilter === ProductsType.FORESTAL) {
      document.getElementById("forestal-button")?.classList.add("active");
      setProducts(plantsList.filter((plant) => plant.type === "forestal"));
      document.getElementById("hornamental-button")?.classList.remove("active");
    }
    if (productsFilter === ProductsType.HORNAMENTAL) {
      document.getElementById("hornamental-button")?.classList.add("active");
      document.getElementById("forestal-button")?.classList.remove("active");
      setProducts(plantsList.filter((plant) => plant.type === "hornamental"));
    }
  };
  useEffect(() => {
    if (screenWidth < 500) {
      setSlides([plantData[slidePosition]]);
    }
  }, [screenWidth, slidePosition]);

  const moreProducts = products.slice(0, 8).map((plant) => {
    return (
      <div
        key={plant.title}
        className={styles["more-products-slide-card-container"]}
      >
        <ProductCard
          image={plant.image}
          title={plant.title}
          price={plant.price}
          discount={plant.discount}
          urlPath={plant.urlPath}
        />
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <header>
        <Navbar />
        <Banner />
      </header>

      {screenWidth < 500 && (
        <div>
          {currentService.map((service) => {
            const { description, image, title } = service;
            return (
              <ServiceCard
                key={title}
                description={description}
                image={image}
                title={title}
              />
            );
          })}
          <div className={styles["card-buttons-container"]}>
            <button
              onClick={() => handlerCardPosition("back")}
              className={styles.handlerButtonCarousel}
            />
            <button
              onClick={() => handlerCardPosition("next")}
              className={styles.handlerButtonCarousel}
            />
          </div>
        </div>
      )}
      <div className={styles["first-paragraph"]}>
        <h2 className={styles["first-paragraph__title"]}>
          Las plantas hacen mejor la vida
        </h2>
        <p className={styles["first-paragraph__text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam
          quos, tenetur ratione consectetur totam iure praesentium quas cumque
          delectus blanditiis vitae sapiente culpa voluptas exercitationem
          dignissimos dolorem quod. Commodi!
        </p>
        <PrimaryButton title={"Leer más"} />
      </div>
      <div className={`${styles["plan-carousel"]}`}>
        <button
          className={styles["carousel-button-slide"]}
          onClick={() => handlerSlides("back")}
        >
          <PiArrowCircleLeft className={styles.icon} />
        </button>
        {slides.map((slide) => {
          return (
            <ProductSlide
              key={slide.title}
              title={slide.title}
              urlPath={slide.urlPath}
              image={slide.image}
            />
          );
        })}
        <button
          className={styles["carousel-button-slide"]}
          onClick={() => handlerSlides("next")}
        >
          <PiArrowCircleRight className={styles.icon} />
        </button>
      </div>
      <div className={styles["trending-products"]}>
        <h1 className={styles["trending-products__title"]}>
          Nuestros Productos
        </h1>
        <div className={styles["trending-products__filter"]}>
          <button
            id="hornamental-button"
            className={`${styles.filter_button} active`}
            onClick={() => handlerProductsFilter(ProductsType.HORNAMENTAL)}
          >
            Plantas Hornamentales
          </button>
          <button
            id="forestal-button"
            className={styles.filter_button}
            onClick={() => handlerProductsFilter(ProductsType.FORESTAL)}
          >
            PLantas Forestales
          </button>
        </div>
        <div className={styles["trending-products__list"]}>
          {products.slice(0, 8).map((plant) => {
            return (
              <ProductCard
                image={plant.image}
                title={plant.title}
                price={plant.price}
                key={plant.title}
                discount={plant.discount}
                urlPath={plant.urlPath}
              />
            );
          })}
        </div>
        <PrimaryButton title={"Ver más"} />
      </div>
      <div
        className={styles.references}
        style={{ backgroundImage: "url(./background.jpg)" }}
      >
        <ReferenceCard
          description="esto es un texto de prioasdnopdsianf asdf  as asopidf h asiopdfh japio asd hfpoiasdfo ss"
          name="Rodrigo Calle"
        />
      </div>
      <div className={styles["more-products-container"]}>
        <h1 className={styles["more-products__title"]}>
          Más de Nuestros Productos
        </h1>
        <div className={styles["more-products__carousel"]}>{moreProducts}</div>
      </div>
      <div className={styles["contact-us-card"]}>
        <h2 className={styles["contact-us-card__title"]}>
          ¿Tienes alguna duda?
        </h2>
        <p className={styles["contact-us-card__text"]}>
          Más de 10 años de experiencia en el mercado nos respaldan, habla con
          nosotros
        </p>
        <PrimaryButton title=" Contactanos aquí"></PrimaryButton>
      </div>
      <Footer />
    </main>
  );
}
