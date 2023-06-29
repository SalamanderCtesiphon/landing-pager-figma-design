import './App.css';
import BannerPhoto from './components/BannerPhoto';
import CallToAction from './components/CallToAction';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PitchSection from './components/PitchSection';
import TopStudents from './components/TopStudents';
import TrendingNews from './components/TrendingNews';

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
      <TrendingNews />
      <Footer />
    </div>
  );
}

export default App;
