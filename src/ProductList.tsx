import { useEffect, useState } from "react";

interface Props {
  productCategory: string;
}

const ProductList = ({ productCategory }: Props) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching product list from server for category", {
      productCategory,
    });
    setProducts(["p1", "p2"]);
  }, [productCategory]);

  return <h1>ProductList</h1>;
};

export default ProductList;
