import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}


export const useProduct = ({onChange, product, value = 0} : useProductArgs) => {
  const [counter, setCounter] = useState(value)

  useEffect(() => {
    setCounter(value)
  }, [value])
  
  const increaseBy = (value: number) => {
    const newCounter = Math.max(0, counter + value);
    setCounter(newCounter)
    onChange && onChange({product, quantity: newCounter})
  }

  return {
    counter,
    increaseBy
  }
}
