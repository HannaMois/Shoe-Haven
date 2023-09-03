import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import island from "../../image/island.png";
import css from "./Error404.module.css";

function PageNotFound404() {
  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <div className={css.error__container}>
        {isNotMobile && (
          <img
            className={css.error__image}
            src={island}
            alt="island"
            height={"50%"}
          />
        )}
        <div className={css.error__content}>
          <h1 className={css.error__number}>404</h1>
          <h2 className={css.error__title}>page not found!</h2>
          <p className={css.error__text}>
            we can't seem find the page you're looking for
          </p>
          <button className={css.error__button}>
            <NavLink className={css.error__link} to={"/"}>
              go back
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound404;
