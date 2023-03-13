import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css"; 
import CartState from "./components/cart/context/CartState";
import ProductState from "./context/product/ProductState"; 
import { Router } from "./router/Router";
 
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  } 
 
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#003057', 
    },
    secondary: {
      main: '#75787B', 
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartState>
        <ProductState>
          <Router/>
        </ProductState>
      </CartState>
    </ThemeProvider>
  );
}

export default App;
