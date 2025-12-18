import products from './fake-data/all-products.ts'
import baseCategories from './fake-data/all-categories.ts'
import {CardList} from "./components/cardList/CardList.tsx";
import {ButtonList} from "./components/buttonList/ButtonList.tsx";
import {useMemo, useState} from "react";
import type {categoriesType} from "./types/categoriesType.ts";
import {replaceFake} from "./utils/replace-fake.ts";

import styles from './app.module.scss'

function App() {
    const [categories] = useState<categoriesType[]>([
        ...(baseCategories.map((category) => replaceFake(category)) as categoriesType[]),
    ]);

  const [currentCategory, setCurrentCategory] = useState<categoriesType>('All')

  const onChangeCategory = (category: categoriesType) => {
      if (category === currentCategory) {
          setCurrentCategory('All')
          return
      }

      setCurrentCategory(category)
  }

  const sortedProducts = useMemo(() => {
      if (currentCategory === "All")  {
          return products
      }
      return products.filter((product) => product.category === currentCategory)
  }, [currentCategory, products])

  return (
    <div className={styles.app}>
        <div className='container'>
            <h2>Products</h2>
            <ButtonList
                categories={categories}
                onChangeCategory={onChangeCategory}
                currentCategory={currentCategory}
            />
            <CardList products={sortedProducts}/>
        </div>
    </div>
  )
}

export default App
