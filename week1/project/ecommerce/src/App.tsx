import styles from './app.module.scss'
import products from './fake-data/all-products.ts'
import {CardList} from "./components/cardList/CardList.tsx";
import {Button} from "./components/button/Button.tsx";

function App() {



  return (
    <div className={styles.app}>
        <div className='container'>
            <Button variant='tertiary'>ASd</Button>
            <CardList products={products}/>
        </div>
    </div>
  )
}

export default App
