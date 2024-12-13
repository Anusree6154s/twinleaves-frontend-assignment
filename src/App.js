import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";

export default function App() {
  const [products, setProducts] = useState([]);
  const [updatedProducts, setUpdatedProducts] = useState([]);

  const initialFilters = {
    categoryFilters: new Set(),
    priceSort: null,
    serachInput: "",
  };
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('called')
        const res = await fetch(
          "https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products"
        );
        const data = await res.json();
        const products = data.products;

        const res2 = await fetch("https://picsum.photos/200/?blur");
        const image = res2.url;

        const prettifiedProducts = products.map((product, index) => {
          return {
            id: product.sku_code,
            img: image,
            name: product.name,
            price: product.mrp.mrp,
            category: product.main_category,
          };
        });

        setProducts(prettifiedProducts);
        setUpdatedProducts(prettifiedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtersCopy = {...filters};
    const { categoryFilters, priceSort, searchInput } = filtersCopy;

    let processedProducts = products.filter((product) =>
      categoryFilters.has(product.category)
    );

    if (priceSort) {
      switch (priceSort) {
        case "price_asc":
          processedProducts = processedProducts.sort((a, b) => a - b);
          break;
        case "price_desc":
          processedProducts = processedProducts.sort((a, b) => a - b);
          break;
        default:
          break;
      }
    }

    processedProducts = processedProducts.filter((product) =>
      product.name.includes(searchInput)
    );

    setUpdatedProducts(processedProducts);
  }, [filters, products]);

  console.log(updatedProducts)
  return (
    <>
      {updatedProducts.length > 0 ? (
        <HomePage
          products={updatedProducts}
          filters={filters}
          setFilters={setFilters}
        />
      ) : (
        <Loader />
      )}
    </>
  );
}
