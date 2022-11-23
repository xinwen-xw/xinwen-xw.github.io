import logo from './logo.svg';
import About from "./sections/about/about";
import Research from "./sections/research/research";
import Community from "./sections/community/community";
import Awards from "./sections/awards/awards";
import Projects from "./sections/projects/projects";
import './styles/styles.scss';

function App() {
  return (
    <div className="page-container">
      <div className="body-part">
        <About />
      </div>
      <div className="research">
        <Research />
      </div>
      <div className="awards">
        <Awards />
      </div>
      <div className="community">
        <Community />
      </div>
      <div className="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
