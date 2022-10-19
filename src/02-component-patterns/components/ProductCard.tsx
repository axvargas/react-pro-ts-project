import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties } from 'react';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: OnChangeArgs )=>void;
  initialValues?: InitialValues
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
  const {counter, increaseBy, isMaxCountReached,maxCount, reset} = useProduct({onChange, product, value, initialValues})
  return (
    <Provider value={{
      counter, 
      product,
      maxCount,
      increaseBy,
      isMaxCountReached
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children && children({
          count: counter,
          isMaxCountReached,
          maxCount,
          increaseBy,
          reset,
          product: product
        })}
      </div>
    </Provider>
  )
}
