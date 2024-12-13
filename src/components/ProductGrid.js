import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "./Loader";

const columns = [
  {
    field: "img",
    headerName: "Product Image",
    width: 90,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Product"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
    ),
    sortable: false,
    filterable: false,
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 150,
    filterable: false,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    sortable: false,
    filterable: false,
  },
  {
    field: "category",
    headerName: "Category",
    type: "number",
    filterable: false,
    width: 110,
    sortable: false,
  },
];

export default function ProductGrid({ products }) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* { products.length > 0 ? ( */}
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20]}
          getRowId={(rows) => rows.id}
        />
      {/* ) : (
        <Loader />
      )} */}
    </Box>
  );
}
