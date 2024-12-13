import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Fab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailsSection({ updatedProducts }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    if (updatedProducts) {
      const product = updatedProducts.find((product) => product.id === id);
      setProduct(product);
    }
  }, [id, updatedProducts]);

  return (
    <Box sx={{ display: "flex", gap: "2%", flex: 1 }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={product.img} alt={product.name} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2">
          Category: {product.category}
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "5%" }}>
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "3%", fontWeight: "bold" }}>
          Price: $ {product.price}
        </Typography>

        <Box sx={{ marginTop: "5%" }}>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            sx={{ boxShadow: "none" }}
            onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
          >
            <Remove />
          </Fab>
          <Typography
            variant="body"
            sx={{
              padding: "1% 4%",
              margin: "0% 1%",
              border: "1px solid grey",
              borderRadius: "20px",
            }}
          >
            {quantity}
          </Typography>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            sx={{ boxShadow: "none" }}
            onClick={() => setQuantity((prev) => Math.max(0, prev + 1))}
          >
            <Add />
          </Fab>
        </Box>

        <Button variant="contained" color="success" sx={{ marginTop: "5%" }}>
          Add to Cart {/* <Typography variant="h6"></Typography> */}
        </Button>
      </Box>
    </Box>
  );
}
