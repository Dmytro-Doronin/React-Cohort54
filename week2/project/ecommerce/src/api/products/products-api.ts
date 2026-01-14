import type { CategoriesWithoutAll } from "../categories/categories.type";
import { baseUrl, fetchJson } from "../base-api.ts";
import type { ProductsType } from "./products.type.ts";

export const getAllProducts = async (): Promise<ProductsType[]> => {
  return fetchJson<ProductsType[]>(`${baseUrl}/products`);
};

export const getProductsForSingleCategory = async (
  category: CategoriesWithoutAll,
): Promise<ProductsType[]> => {
  return fetchJson<ProductsType[]>(
    `${baseUrl}/products/category/${encodeURIComponent(category)}`,
  );
};

export const getProductById = async (id: number): Promise<ProductsType> => {
  return fetchJson<ProductsType>(`${baseUrl}/products/${id}`);
};

export const fetchFavouriteProducts = async (
  ids: number[],
): Promise<ProductsType[]> => {
  return Promise.all(
    ids.map((id) => fetchJson<ProductsType>(`${baseUrl}/products/${id}`)),
  );
};
