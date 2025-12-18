import {Button} from "../button/Button.tsx";

import styles from './buttonList.module.scss'
import type {categoriesType} from "../../types/categoriesType.ts";
type ButtonListProps = {
    currentCategory: categoriesType;
    categories: categoriesType[];
    onChangeCategory: (category: categoriesType) => void;
};

export const ButtonList = ({ currentCategory, categories, onChangeCategory }: ButtonListProps) => {

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


