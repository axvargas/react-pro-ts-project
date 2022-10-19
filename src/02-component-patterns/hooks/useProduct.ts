import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
  initialValues?: InitialValues;
}


export const useProduct = ({onChange, product, initialValues, value = 0} : useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.quantity || value);
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (!isMounted.current) return
    console.log('useProduct useEffect', value);
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true;
    console.log('isMounted.current', isMounted.current);
  }, []);
  
  const reset = () =>{
    setCounter(initialValues?.quantity || value);
  }
  
  const increaseBy = (value: number) => {
    const newCounter = Math.max(0, counter + value);
    if (initialValues?.maxQuantity && newCounter > initialValues.maxQuantity) return;
    setCounter(newCounter)
    onChange && onChange({product, quantity: newCounter})
  }

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxQuantity && counter >= initialValues.maxQuantity,
    maxCount: initialValues?.maxQuantity,
    
    increaseBy,
    reset
  }
}
