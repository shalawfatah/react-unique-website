import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="container-all">
    <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
