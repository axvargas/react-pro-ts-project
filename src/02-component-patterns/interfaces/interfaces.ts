import { ReactElement } from "react";

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}