import React from "react";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";
import hero1 from "../../image/hero1.svg";
import hero2 from "../../image/hero2.svg";
import hero3 from "../../image/hero3.svg";
import hero4 from "../../image/hero4.svg";
import "react-slideshow-image/dist/styles.css";
import css from './Products.module.css'

const Slideshow = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <Slide>
      <div className="each-slide-effect">
        <div className="each-slide-effect-div box">
          <div className="each-slide-effect-content">
            <div className={css.slide__content}>
              <h2 className={css.slide__title}>Get Your Feet into Our High-Quality, Comfortable</h2>
              <p className={css.slide__text}>
                Find the perfect pair of sneakers to take your style to the next
                level at our store. With a wide range of styles and brands to
                choose from, you'll never have to settle for less than your best.
              </p>
              <p className={css.slide__slogan}>
                Shop now and step up your sneaker game
              </p>
            </div>
            {isNotMobile && <img src={hero1} alt="banner" className={css.slide__img} />}
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect-div box">
          <div className="each-slide-effect-content">
            <div className={css.slide__content}>
              <h2 className={css.slide__title}>Discover Our Range of Colors, Patterns, and Materials</h2>
              <p className={css.slide__text}>
                At Shoe Haven, we're passionate about sneakers. Whether you're a serious athlete or a fashion-forward individual, we have the perfect pair of sneakers for you. We carry a wide selection of sneakers for men, women, and kids, with styles ranging from running shoes to high-end fashion sneakers.
              </p>
              <p className={css.slide__slogan}>
                Shop now and step up your sneaker game
              </p>
            </div>
            {isNotMobile &&   <img src={hero2} alt="banner" className={css.slide__img }/>}
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect-div box">
          <div className="each-slide-effect-content">
            <div className={css.slide__content}>
              <h2 className={css.slide__title}>Sneakers Step Up Your Sneaker Game</h2>
              <p className={css.slide__text}>
                We believe that everyone deserves high-quality, comfortable footwear, which is why we only carry top brands and use high-quality materials in all of our products. Our knowledgeable staff is always on hand to help you find the perfect pair of sneakers to meet your needs and match your style.
              </p>
              <p className={css.slide__slogan}>
                Shop now and step up your sneaker game
              </p>
            </div>
            {isNotMobile &&   <img src={hero3} alt="banner" className={css.slide__img} />}
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect-div box">
          <div className="each-slide-effect-content">
            <div className={css.slide__content}>
              <h2 className={css.slide__title}>Find Your Perfect Pair of Sneakers at Our Store</h2>
              <p className={css.slide__text}>
                We understand that every customer is unique, which is why we carry a wide selection of sneakers from the world's top brands. From classic designs to the latest trends, we have something for everyone, no matter your style or budget.
              </p>
              <p className={css.slide__slogan}>
                Shop now and step up your sneaker game
              </p>
            </div>
            {isNotMobile && <img src={hero4} alt="banner" className={css.slide__img} />}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
