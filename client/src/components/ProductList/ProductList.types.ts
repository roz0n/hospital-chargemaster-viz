export interface ProductListProps {
  productList?: ProductProps[];
}

export type ProductProps = {
  label: string,
  price: number,
  hospitalId: number
}