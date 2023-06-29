import './App.css';
import BannerPhoto from './components/BannerPhoto';
import CallToAction from './components/CallToAction';
import Courses from './components/Courses';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PitchSection from './components/PitchSection';
import TopStudents from './components/TopStudents';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <PitchSection />
      <Courses />
      <BannerPhoto />
      <TopStudents />
      <CallToAction />
    </div>
  );
}

export default App;
