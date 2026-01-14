import styles from "./card.module.scss";
import { replaceFake } from "../../utils/replace-fake.ts";
import type { ProductsType } from "../../api/products/products.type.ts";
import { useFavourites } from "../../hooks/useFavourite.tsx";

import HeartNotFilled from "../../assets/heart-svgrepo-com.svg";
import HeartFilled from "../../assets/heart-like-svgrepo-com.svg";

type CardProps = {
  product: ProductsType;
};

export const Card = ({ product }: CardProps) => {
  const { toggleFavourite, isFavourite } = useFavourites();

  const fav = isFavourite(product.id);

  const ontoggleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite(product.id);
  };

  const { title, description, image } = product;
  return (
    <div
      className={`${styles.open} ${styles.card} ${styles.dark} ${styles.fadeUp}`}
    >
      <button className={styles.cardButton} onClick={ontoggleFavourite}>
        <img src={fav ? HeartFilled : HeartNotFilled} alt="favourite" />
      </button>
      <span className={`${styles.shine}`}></span>
      <span className={`${styles.shine} ${styles["shine-bottom"]}`}></span>
      <span className={`${styles.glow} ${styles["glow-top"]}`}></span>
      <span className={`${styles.glow} ${styles["glow-bottom"]}`}></span>
      <span
        className={`${styles.glow} ${styles["glow-bright"]} ${styles["glow-top"]}`}
      ></span>
      <span
        className={`${styles.glow} ${styles["glow-bright"]} ${styles["glow-bottom"]}`}
      ></span>
      <div className={styles.inner}>
        <img className={styles["card-img"]} src={image} alt={title} />
        <h3>{replaceFake(title)}</h3>
        <p className={styles.description}>{replaceFake(description)}</p>
      </div>
    </div>
  );
};
