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
import {allCategories} from "../../variables/categoriesVariables.ts";

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
  } = useFetch(getProductsForSingleCategory, "Products");

  const {
    data: categories,
    request: getCategories,
    loading: categoriesLoading,
  } = useFetch(getAllCategories, "Categories");

  const [currentCategory, setCurrentCategory] = useState<categoriesType>(allCategories);

  const onChangeCategory = (category: categoriesType) => {
    if (category === currentCategory) {
      setCurrentCategory(allCategories);
      return;
    }

    setCurrentCategory(category);
  };

  useEffect(() => {
    if (currentCategory === allCategories) {
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

  const isAll = currentCategory === allCategories;

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
