// Sidebar
export interface SidebarProps {
  productList?: ProductProps[];
  isVisible: boolean;
  toggleVisibility: () => void;
}

// ProductList
export type ProductProps = {
  label: string,
  price: number,
  hospitalId: number
}

export interface ProductListProps {
  productList?: ProductProps[];
}