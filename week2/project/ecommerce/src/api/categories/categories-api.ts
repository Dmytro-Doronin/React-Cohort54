import {baseUrl, fetchJson} from "../base-api.ts"
import type {CategoriesWithoutAll} from "./categories.type.ts"

export const getAllCategories = async (): Promise<CategoriesWithoutAll[]> => {
    return fetchJson<CategoriesWithoutAll[]>(`${baseUrl}/products/categories`)
}