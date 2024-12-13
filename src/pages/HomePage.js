import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import CategorySection from "../components/CategorySection";
import { Box } from "@mui/material";
import ProductsSection from "../components/products/ProductsSection";
import { ProductContext } from "../contexts/ProductContext";

export default function HomePage() {
  const { products } = useContext(ProductContext);
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [filters, setFilters] = useState({
    categoryFilters: [],
    priceSort: "",
    searchInput: "",
  });

  useEffect(() => {
    setUpdatedProducts(products);
  }, [products]);

  useEffect(() => {
    if (products) {
      const filtersCopy = { ...filters };
      const { categoryFilters, priceSort, searchInput } = filtersCopy;
      let processedProducts = [...products];
      if (categoryFilters.length > 0) {
        console.log(categoryFilters);
        processedProducts = processedProducts.filter((product) => {
          const formattedCategory =
            product.category[0] +
            product.category.slice(1, product.category.length).toLowerCase();
          return categoryFilters.includes(formattedCategory);
        });
      }
      if (priceSort) {
        switch (priceSort) {
          case "price_asc":
            processedProducts = processedProducts.sort(
              (a, b) => a.price - b.price
            );
            break;
          case "price_desc":
            processedProducts = processedProducts.sort(
              (a, b) => b.price - a.price
            );
            break;
          default:
            break;
        }
      }

      processedProducts = processedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchInput)
      );
      console.log(processedProducts);

      setUpdatedProducts(processedProducts);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <>
      <Header setFilters={setFilters} />
      <Box sx={{ display: "flex", padding: "20px", gap: "2%" }}>
        <CategorySection
          filters={filters}
          setFilters={setFilters}
          updatedProducts={updatedProducts}
        />
        <ProductsSection
          updatedProducts={updatedProducts}
          setFilters={setFilters}
        />
      </Box>
    </>
  );
}
