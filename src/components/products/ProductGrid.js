import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { fetchData } from "../../api/fetchData";
import { ProductContext } from "../../contexts/ProductContext";
import { LoaderGrid } from "../Loader";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router";

const columns = [
  {
    field: "img",
    headerName: "Product Image",
    flex: 0.5,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Product"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
    ),
  },
  {
    field: "name",
    headerName: "Product Name",
    flex: 1,
  },
  {
    field: "price",
    flex: 0.5,
    headerName: "Price",
    renderCell: (params) => <span>$ {params.value}</span>,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
  },
];

export default function ProductGrid({ updatedProducts, setFilters }) {
  const { totalProducts, setProducts } = useContext(ProductContext);
  const [sortValue, setSortValue] = useState('');
  const navigate = useNavigate();

  const handlePageChange = async (e) => {
    let data = await fetchData(e.page + 1);
    console.log(data);
    setProducts(data.items);
  };

  const handleViewProducts = (params) => {
    navigate("/details/" + params.id);
  };

  const handleSort = (e) => {
    let value = e.target.value;
    setSortValue(value);
    console.log(e.target.value);
    setFilters((prev) => {
      return { ...prev, priceSort: value };
    });
  };
  return (
    <Box sx={{ height: "100%", width: "100%", flex: 1 }}>
      <Box sx={{ textAlign: "right" }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={sortValue}
            onChange={handleSort}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={''}>Relevance</MenuItem>
            <MenuItem value="price_asc">Price Low to High</MenuItem>
            <MenuItem value="price_desc">Price High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {updatedProducts && updatedProducts.length > 0 ? (
        <DataGrid
          rows={updatedProducts}
          columns={columns.map((column) => ({
            ...column,
            disableColumnMenu: true,
            sortable: false,
          }))}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: updatedProducts.length,
              },
            },
          }}
          pageSizeOptions={[20]}
          rowCount={totalProducts}
          onPaginationModelChange={handlePageChange}
          onRowClick={handleViewProducts}
          paginationMode="server"
          getRowId={(rows) => rows.id}
          sx={{
            width: "100%",
            height: "70vh",
          }}
        />
      ) : (
        <LoaderGrid />
      )}
    </Box>
  );
}
