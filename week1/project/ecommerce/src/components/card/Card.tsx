import styles from './card.module.scss'
import type {ProductType} from "../../types/productType.ts";


type CardProps = {
    product: ProductType;
};

export const Card = ({product}: CardProps) => {

    const {title, description, image} = product;

    return (
        <div className={`${styles.open} ${styles.card} ${styles.dark} ${styles.fadeUp}`}>
            <span className={`${styles.shine}`}></span>
            <span className={`${styles.shine} ${styles['shine-bottom']}`}></span>
            <span className={`${styles.glow} ${styles['glow-top']}`}></span>
            <span className={`${styles.glow} ${styles['glow-bottom']}`}></span>
            <span className={`${styles.glow} ${styles['glow-bright']} ${styles['glow-top']}`}></span>
            <span className={`${styles.glow} ${styles['glow-bright']} ${styles['glow-bottom']}`}></span>
            <div className={styles.inner}>
                <img className={styles['card-img']} src={image} alt={title}/>
                <h3>${title}</h3>
                <p className={styles.description}>${description}</p>
            </div>
        </div>
    );
};

