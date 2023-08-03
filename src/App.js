import './App.css';
import CashCard from './components/CashCard';
import Investing from './components/Investing';
import Banking from './components/Banking';
import Hero from './components/Hero';
import Payments from './components/Payments';

function App() {
  return (
    <div className="App">
      <Hero />
      <Payments />
      <Banking />
      <CashCard />
      <Investing />
    </div>
  );
}

export default App;
