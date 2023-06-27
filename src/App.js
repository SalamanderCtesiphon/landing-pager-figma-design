import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PitchSection from './components/PitchSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PitchSection />
    </div>
  );
}

export default App;
