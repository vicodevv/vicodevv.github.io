import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tools from './components/Tools/Tools';
import Project from './components/Projects/Project';

function App() {
  return (
   <Route exact path="/">
      <Home />
      <Tools />
      <Project />
    </Route>
  );
}

export default App;
