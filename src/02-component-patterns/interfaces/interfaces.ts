
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";

export interface ProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
  isMaxCountReached: boolean;
  increaseBy: (value: number) => void;
}

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  quantity: number;
}

export interface ShoppingCartProduct extends Product {
  quantity: number;
}

export interface InitialValues {
  quantity?: number;
  maxQuantity?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}