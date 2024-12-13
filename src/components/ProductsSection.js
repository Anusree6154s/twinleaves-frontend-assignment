import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductGrid from './ProductGrid'
import DetailsSection from './DetailsSection'

export default function ProductsSection({products}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductGrid products={products} />} />
        <Route path="/details/:id" element={<DetailsSection />} />
      </Routes>
    </BrowserRouter>
  );
}
