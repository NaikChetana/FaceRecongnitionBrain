import ParticlesBg from 'particles-bg';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation/Navigation';
import { Rank } from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* 
      
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
