import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      background: {
        default: '#111315', // Color de fondo global
      },
      text: {
        primary: '#ffffff', // Color del texto principal
        secondary: '#b0b0b0', // Color del texto secundario
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif", // Fuente global
    },
  });
  
  export default theme;