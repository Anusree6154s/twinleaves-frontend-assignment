import {  InputBase, styled } from "@mui/material";
import React, { useState, useCallback } from "react";
import { Search } from "@mui/icons-material";

const SearchBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  marginRight: 0,
  width: "80%",
  height: "40px",
  border: "1px solid black",
  [theme.breakpoints.up("xs")]: {
    marginRight: theme.spacing(1),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#30a106",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "80vw",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "40vw",
      "&:focus": {
        width: "40vw",
      },
    },
  },
}));

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export default function SearchBar({ setFilters }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setFilters((prev) => {
      return { ...prev, searchInput: input.toLowerCase() };
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedInput = useCallback(
    debounce((value) => setInput(value), 100),
    []
  );

  const handleInput = (e) => {
    debouncedInput(e.target.value);
  };

  return (
    <SearchBox>
      <StyledInputBase
        placeholder="Search for Products…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleInput}
      />
      <SearchIconWrapper onClick={handleSearch}>
        <Search sx={{ color: "white" }} />
      </SearchIconWrapper>
    </SearchBox>
  );
}
