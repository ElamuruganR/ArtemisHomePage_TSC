import './App.css';
import Header from './organisms/header/Header';
import Carousel from './organisms/carousel/Carousel';
import Cards from './organisms/cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Cards />
    </div>
  );
}

export default App;
