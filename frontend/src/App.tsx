
import './App.css';
import ProductState from './context/ProductState';
import { MainPage } from './main/view/MainPage';

function App() {
  return (
    <ProductState>
      <MainPage/>
    </ProductState>
  );
}

export default App;
