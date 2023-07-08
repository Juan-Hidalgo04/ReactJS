import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import headingHome from './Heading_home.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={headingHome} alt="Travel" className="center_img"/>
         <NavBar/>
      </header>
      <body className="main">
          <ItemListContainer greeting="Welcome to our TravelStore."/>
      </body>
    </div>
  );
}

export default App;
