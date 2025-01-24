import { createTheme } from "@mui/material/styles";
import { blue, grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: blue[700] },
    secondary: { main: red[500] },
    background: {
      default: grey[100],
      paper: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: grey[300] },
    secondary: { main: red[200] },
    background: {
      default: "#121212",
      paper: grey[900],
    },
  },
});
