import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <ItemListContainer/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
          <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
 
}

export default App;
