import { useEffect, useMemo, useState } from "react";
import { useFetch } from "../../hooks/useFetch.tsx";
import {
  getAllProducts,
  getProductsForSingleCategory,
} from "../../api/products/products-api.ts";
import { getAllCategories } from "../../api/categories/categories-api.ts";
import type { categoriesType } from "../../api/categories/categories.type.ts";
import { ButtonList } from "../../components/buttonList/ButtonList.tsx";
import { CardList } from "../../components/cardList/CardList.tsx";

export const HomePage = () => {
  const {
    data: allProducts,
    request: getAllProductsRequest,
    loading: allProductsLoading,
  } = useFetch(getAllProducts);

  const {
    data: productsForSingleCategory,
    request: getProductsForSingleCategoryRequest,
    loading: productsForSingleCategoryLoading,
  } = useFetch(getProductsForSingleCategory);

  const {
    data: categories,
    request: getCategories,
    loading: categoriesLoading,
  } = useFetch(getAllCategories);

  const [currentCategory, setCurrentCategory] = useState<categoriesType>("All");

  const onChangeCategory = (category: categoriesType) => {
    if (category === currentCategory) {
      setCurrentCategory("All");
      return;
    }

    setCurrentCategory(category);
  };

  useEffect(() => {
    if (currentCategory === "All") {
      if (!allProducts) {
        getAllProductsRequest();
      }
      return;
    }
    getProductsForSingleCategoryRequest(currentCategory);
  }, [
    allProducts,
    currentCategory,
    getAllProductsRequest,
    getProductsForSingleCategoryRequest,
  ]);

  useEffect(() => {
    getCategories();
  }, []);

  const isAll = currentCategory === "All";

  const products = useMemo(() => {
    return (isAll ? allProducts : productsForSingleCategory) ?? [];
  }, [isAll, allProducts, productsForSingleCategory]);

  const productLoading = isAll
    ? allProductsLoading
    : productsForSingleCategoryLoading;

  return (
    <>
      <h2>Products</h2>
      <ButtonList
        categories={categories}
        onChangeCategory={onChangeCategory}
        currentCategory={currentCategory}
        loading={categoriesLoading}
      />
      <CardList products={products} loading={productLoading} />
    </>
  );
};
