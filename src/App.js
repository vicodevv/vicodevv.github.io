import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tools from './components/Tools/Tools';
function App() {
  return (
   <Route exact path="/">
      <Home />
      <Tools />
    </Route>
  );
}

export default App;
