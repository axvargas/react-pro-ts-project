import { useState } from "react"
import { Product, ShoppingCartProduct } from "../interfaces/interfaces"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ShoppingCartProduct}>({})
  
  const onProductQuantityChange = ({product, quantity}: {product: Product, quantity: number}) => {  
    setShoppingCart(oldShoppingCart => {
      const shoppingCartProduct: ShoppingCartProduct = oldShoppingCart[product.id] || {...product, quantity: 0}
      if(Math.max(0, shoppingCartProduct.quantity + quantity) > 0) {
        shoppingCartProduct.quantity += quantity;
        return {...oldShoppingCart, [product.id]: shoppingCartProduct}
      } 
      const newShoppingCart = {...oldShoppingCart}
      delete newShoppingCart[product.id]
      return newShoppingCart
      // const newShoppingCart = {...oldShoppingCart};
      // if (quantity === 0) {
      //   delete newShoppingCart[product.id];
      // } else {
      //   newShoppingCart[product.id] = {
      //     ...product,
      //     quantity
      //   }
      // }
      // return newShoppingCart;
    });
  }

  return {
    shoppingCart,
    onProductQuantityChange
  }
}
