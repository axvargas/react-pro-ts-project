import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

  const { shoppingCart, onProductQuantityChange} = useShoppingCart()


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              className="bg-dark text-white"
              product={product}
              value={shoppingCart[product.id]?.quantity || 0}
              onChange={onProductQuantityChange}
            >
              <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)' }} />
              <ProductTitle className='text-white text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>
        <h2>Shopping Cart</h2>
        {
          shoppingCart && Object.entries(shoppingCart).length > 0 && 
          Object.entries(shoppingCart).map(([key, product]) => {
            return (
              <ProductCard
                key={key}
                style={{ width: '100px' }}
                className="bg-dark text-white"
                product={product}
                value={product.quantity}
                onChange={onProductQuantityChange}
              >
                <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.3)' }} />
                <ProductButtons className='custom-buttons' style={{display: 'flex', justifyContent: 'center'}}/>
              </ProductCard>
            )
          })
        }
        {
          (!shoppingCart || Object.keys(shoppingCart).length === 0) &&
          <p>Shopping cart is empty</p>
        }
      </div>
    </div>
  )
}
