import styles from "./cardList.module.scss";
import { Card } from "../card/Card.tsx";
import type { ProductsType } from "../../api/products/products.type.ts";
import { Loader } from "../loader/Loader.tsx";
import { NavLink } from "react-router-dom";

type CardList = {
  products: ProductsType[];
  loading: boolean;
};

export const CardList = ({ products, loading }: CardList) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.cardList}>
      {products.map((product) => (
        <NavLink to={`products/${product.id}`} key={product.id}>
          <Card key={product.id} product={product} />
        </NavLink>
      ))}
    </div>
  );
};
