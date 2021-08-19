import Navbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;