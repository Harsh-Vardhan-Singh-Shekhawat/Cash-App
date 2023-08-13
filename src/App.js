import './App.css';
import CashCard from './components/CashCard';
import Investing from './components/Investing';
import Banking from './components/Banking';
import Hero from './components/Hero';
import Payments from './components/Payments';
import { useRef } from 'react';

function App() {

  const ref = useRef(null);


  return (
    <div className="App md:overflow-x-hidden">
      <Hero ref={ref} />
      <Payments ref={ref} />
      <Banking />
      <CashCard />
      <Investing />
    </div>
  );
}

export default App;
