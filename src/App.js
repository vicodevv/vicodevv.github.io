import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
   <Route exact path="/">
      <Home />
    </Route>
  );
}

export default App;
