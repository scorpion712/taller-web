import "./App.css";
import CartState from "./cart/context/CartState";
import ProductState from "./context/ProductState";
import { MainPage } from "./main/view/MainPage";

function App() {
  return (
    <CartState>
      <ProductState>
        <MainPage />
      </ProductState>
    </CartState>
  );
}

export default App;
