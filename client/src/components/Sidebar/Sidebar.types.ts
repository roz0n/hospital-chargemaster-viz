import { ProductProps } from "../ProductList/ProductList.types";

export interface SidebarProps {
  productList?: ProductProps[];
  isVisible: boolean;
  toggleVisibility: () => void;
}

export interface CheckoutPanelProps {
  total?: number;
}

export type SelectedProduct = {
  [label: string]: number;
}