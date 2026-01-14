import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div></div>
        <div className={styles.links}>
          <NavLink className={styles.link} to="/">
            Products
          </NavLink>
          <NavLink className={styles.link} to="/favourites">
            Favourites
          </NavLink>
        </div>
      </div>
    </header>
  );
};
