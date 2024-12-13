import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";

export default function Header({ setFilters }) {
  // const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: "none", borderBottom: "1px solid grey" }}
      >
        <Toolbar sx={{ diplay: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: "flex", alignItems: "center" }}
            // onClick={() => navigate("/")}
          >
            <img src="/logo.png" alt="logo" width={50} />
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <img src="/logo2.png" alt="logo" />
            </Box>
          </IconButton>
          <SearchBar setFilters={setFilters} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
