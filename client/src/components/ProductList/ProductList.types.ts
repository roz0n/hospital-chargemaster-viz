export type ProductProps = {
  label: string,
  price: number,
  hospitalId: number
}

export interface ProductListProps {
  productList?: ProductProps[];
  selectedProducts: object;
  handleSelection: (e: any, label: string, price: number) => void;
}

export interface ProductListCardProps {
  product: ProductProps;
  isSelected?: boolean;
  // Find how to avoid this repition
  onClick: (e: any, label: string, price: number) => void;
}