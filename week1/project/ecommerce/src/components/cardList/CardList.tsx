import styles from './cardList.module.scss'
import type {ProductType} from "../../types/productType.ts";
import {Card} from "../card/Card.tsx";

type CardList = {
    products: ProductType[]
}

export const CardList = ({products}: CardList) => {
    return (
        <div className={styles.cardList}>
            {products.map((product) => (
                <Card key={product.id} product={product}/>
            ))}
        </div>
    );
};

