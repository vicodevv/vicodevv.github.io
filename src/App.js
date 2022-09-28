import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tools from './components/Tools/Tools';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
   <Route exact path="/">
      <Home />
      <Tools />
      <Project />
      <Contact />
    </Route>
  );
}

export default App;
