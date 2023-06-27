import './App.css';
import Courses from './components/Courses';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PitchSection from './components/PitchSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PitchSection />
      <Courses />
    </div>
  );
}

export default App;
