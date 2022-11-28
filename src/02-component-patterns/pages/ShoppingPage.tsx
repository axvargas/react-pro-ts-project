import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

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
              product={product}
              initialValues={{
                quantity: 4,
                // maxQuantity: 10
              }}
            >
              {
                ({reset, count, maxCount, isMaxCountReached, increaseBy})=>(
                  <>
                    <ProductImage/>
                    <ProductTitle />
                    <ProductButtons />            
                  </>
                )
              }
            </ProductCard>
      </div>
    </div>
  )
}
