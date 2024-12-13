import React from "react";
import Header from "../components/Header";
import CategorySection from "../components/CategorySection";
import { Box } from "@mui/material";
import ProductsSection from "../components/ProductsSection";

export default function HomePage({ products, filters, setFilters }) {
  console.log('home page', products)
  return (
    <>
      <Header setFilters={setFilters} />
      <Box sx={{ display: "flex" }}>
        <CategorySection setFilters={setFilters} products={products} />
        <ProductsSection products={products}/>
      </Box>
    </>
  );
}
