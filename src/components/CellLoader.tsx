import { Box, CircularProgress, useTheme } from "@mui/material";
import React from "react";

interface CellLoaderProps {
  loading: boolean;
  children: React.ReactNode;
}

const CellLoader: React.FC<CellLoaderProps> = ({ loading, children }) => {
  const theme = useTheme();

  return loading ? (
    <Box
      sx={{
        borderRadius: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.background.paper,
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>{children}</>
  );
};

export default CellLoader;
