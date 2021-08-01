import Navbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre="CoderHouse" />
    </div>
  );
}

export default App;