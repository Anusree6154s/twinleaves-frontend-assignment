import { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";

export const ProductContext = createContext();

export default function ProductContextWrapper({ children }) {
  const [products, setProducts] = useState(null);
  const [totalProducts, setTotalProducts] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      let data = await fetchData(1);
      setProducts(data.items);
      setTotalProducts(data.totalItems);
    };

    loadData();
  }, []);

  return (
    <ProductContext.Provider value={{ totalProducts, products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
