import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}


export const useProduct = ({onChange, product, value = 0} : useProductArgs) => {
  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)
  useEffect(() => {
    setCounter(value)
  }, [value])
  
  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange && onChange({product, quantity:value})
    }
    const newCounter = Math.max(0, counter + value);
    setCounter(newCounter)
    onChange && onChange({product, quantity: newCounter})
  }

  return {
    counter,
    increaseBy
  }
}
