import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
            <ProductCard
              key={product.id}
              className="bg-dark text-white"
              product={product}
              initialValues={{
                quantity: 4,
                maxQuantity: 10
              }}
            >
              {
                ({reset, count, maxCount, isMaxCountReached, increaseBy})=>(
                  <>
                    <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)' }} />
                    <ProductTitle className='text-white text-bold' />
                    <ProductButtons className='custom-buttons' />
                    <button onClick={reset}>reset</button>
                    <button onClick={()=> increaseBy(-2)}>-2</button>
                    <span>{count} - {maxCount}</span>
                    {
                      !isMaxCountReached && <button onClick={()=>increaseBy(+2)}>+2</button>
                    }
                  </>
                )
              }
            </ProductCard>
      </div>
    </div>
  )
}
