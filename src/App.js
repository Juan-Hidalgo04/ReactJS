import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <header className="App-header">
        <img src="/assets/Heading_home.webp" alt="Travel" className="center_img" />
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/produc/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h1>Page not found: 404</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
