import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import CartState from "./components/cart/context/CartState";
import ProductState from "./views/main/context/ProductState";
import { Router } from "./router/Router";
import AuthState from "./views/login/context/AuthState";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#003057",
    },
    secondary: {
      main: "#75787B",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <CartState>
          <ProductState>
            <Router />
          </ProductState>
        </CartState>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
