import { Box, CircularProgress, Skeleton } from "@mui/material";
import React from "react";

export const LoaderGrid=()=> {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        // justifyContent: "center",
        alignItems: "stretch",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* <CircularProgress /> */}
      {Array.from({ length: 5}).map((_, index) => (
        <Skeleton key={index} variant="rounded" width='100%' height={80} />
      ))}
    </Box>
  );
}

export const LoaderCategory=()=> {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        // justifyContent: "center",
        alignItems: "stretch",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* <CircularProgress /> */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} variant="rounded" width='100%' height={30} />
      ))}
    </Box>
  );
}
