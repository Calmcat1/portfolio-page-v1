import './App.css';
import {Footer, Intro, NavBar, Projects, Semi_footer, Tech_Stack, Mobile_Nav} from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Mobile_Nav />
      <Intro />
      <Tech_Stack />
      <Projects />
      <Semi_footer />
      <Footer />
    </div>
  );
}

export default App;
