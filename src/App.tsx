import './App.css';
import Header from './organisms/header/Header';
import HeroCarousel from './organisms/herocarousel/HeroCarousel';
import CarouselGrid from './organisms/cards/CarouselGrid';
import { ReactElement } from 'react';

function App():ReactElement {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <CarouselGrid />
    </div>
  );
}

export default App;
