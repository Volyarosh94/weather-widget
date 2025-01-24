"use client";

import React from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme";

interface SystemThemeProviderProps {
  children: React.ReactNode;
}

export default function SystemThemeProvider({
  children,
}: SystemThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = prefersDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
