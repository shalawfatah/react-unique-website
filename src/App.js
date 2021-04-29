import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
