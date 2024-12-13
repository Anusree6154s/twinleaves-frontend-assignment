import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import Loader from "./Loader";

export default function CategorySection({ setFilters, products }) {
  return (
    <FormGroup sx={{ width: "max-content" }}>
      {/* { products.length > 0 ? ( */}
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      {/* ) : (
        <Loader />
      )} */}
    </FormGroup>
  );
}
