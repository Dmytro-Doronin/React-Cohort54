import { Button } from "../button/Button.tsx";

import styles from "./buttonList.module.scss";
import type {
  categoriesType,
  CategoriesWithoutAll,
} from "../../api/categories/categories.type.ts";
import { Loader } from "../loader/Loader.tsx";
type ButtonListProps = {
  currentCategory: categoriesType;
  categories: CategoriesWithoutAll[] | null;
  onChangeCategory: (category: categoriesType) => void;
  loading: boolean;
};

export const ButtonList = ({
  currentCategory,
  categories,
  onChangeCategory,
  loading,
}: ButtonListProps) => {
  if (loading || !categories) {
    return <Loader />;
  }

  if (!loading && categories.length === 0) {
    return <div>There are no categories.</div>;
  }

  return (
    <div className={styles.buttonList}>
      {categories.map((category: categoriesType) => (
        <Button
          key={category}
          variant={currentCategory === category ? "primary" : "secondary"}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
