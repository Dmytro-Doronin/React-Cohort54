import {Button} from "../button/Button.tsx";

import styles from './buttonList.module.scss'
import type {categoriesType} from "../../types/catogoriesType.ts";
type ButtonListProps = {
    currentCategory: categoriesType;
    categories: categoriesType[];
    callback: (category: categoriesType) => void;
};

export const ButtonList = ({ currentCategory, categories, callback }: ButtonListProps) => {

    return (
        <div className={styles.buttonList}>
            {categories.map((category: categoriesType) => (
                <Button
                    key={category}
                    variant={currentCategory === category ? "primary" : "secondary"}
                    onClick={() => callback(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};


