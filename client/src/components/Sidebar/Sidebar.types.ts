import { ProductProps } from "../ProductList/ProductList.types";

export interface SidebarProps {
  productList?: ProductProps[];
  isVisible: boolean;
  toggleVisibility: () => void;
}