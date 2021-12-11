import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './detalle/ItemDetailContainer';
import { CartContextProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartContextProvider.Provider>  
      <BrowserRouter value={{}}>
        <div className="App">
          <NavBar />
          {/* <ItemListContainer/> */}
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
            <Route path="item/:itemIdParams" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider.Provider>
  );
 
}
export default App;
