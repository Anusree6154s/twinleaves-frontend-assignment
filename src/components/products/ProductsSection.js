import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductGrid from "./ProductGrid";
import DetailsSection from "./DetailsSection";

export default function ProductsSection({ updatedProducts, setFilters }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductGrid updatedProducts={updatedProducts} setFilters={setFilters} />}
        />
        <Route
          path="/details/:id"
          element={<DetailsSection updatedProducts={updatedProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
