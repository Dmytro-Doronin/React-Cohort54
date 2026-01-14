import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./productPage.module.scss";
import { useFetch } from "../../hooks/useFetch.tsx";
import { getProductById } from "../../api/products/products-api.ts";
import { Loader } from "../../components/loader/Loader.tsx";
import { replaceFake } from "../../utils/replace-fake.ts";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: productData,
    loading: productLoading,
    request: productRequest,
  } = useFetch(getProductById);

  useEffect(() => {
    if (!id) {
      return;
    }
    productRequest(Number(id!));
  }, [id, productRequest]);

  if (productLoading) {
    return <Loader />;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }

  const { image, title, description, price } = productData;

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt={title} />
      <h3>{replaceFake(productData?.title)}</h3>
      <p className={styles.description}>{replaceFake(description)}</p>
      <p className={styles.description}>Price: ${price}</p>
    </div>
  );
};
