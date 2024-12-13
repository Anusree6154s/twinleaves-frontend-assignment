import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { LoaderCategory } from "./Loader";
import { ProductContext } from "../contexts/ProductContext";

export default function CategorySection({ filters, setFilters }) {
  const { products } = useContext(ProductContext);
  console.log(products);
  const [categories, setCategories] = useState(products);

  useEffect(() => {
    if (products) {
      const categories = new Set(
        products.map(
          (product) =>
            product.category[0] +
            product.category.slice(1, product.category.length).toLowerCase()
        )
      );
      setCategories([...categories]);
    }
  }, [products]);

  const handleFilter = (e, category) => {
    e.stopPropagation();
    console.log(category);
    if (filters.categoryFilters.includes(category)) {
      const filtersCopy =[...filters.categoryFilters]
      const removedCategories = filtersCopy.filter(
        (item) => item !== category
      );
      setFilters((prev) => {
        return {
          ...prev,
          categoryFilters: removedCategories,
        };
      });
    } else {
      setFilters((prev) => {
        return {
          ...prev,
          categoryFilters: [...prev.categoryFilters, category],
        };
      });
    }
  };

  return (
    <FormGroup
      sx={{ flex: 0.25, paddingRight: "3%", borderRight: "1px solid #dbdbdb" }}
    >
      <Typography variant="h5">Category</Typography>
      <Stack sx={{ marginTop: "5%" }}>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.categoryFilters.includes(category)}
                />
              }
              onClick={(e) => handleFilter(e, category)}
              key={category}
              label={category}
            />
          ))
        ) : (
          <LoaderCategory />
        )}
      </Stack>
    </FormGroup>
  );
}
