
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Header from './components/Header/Header';

function App() {
  return (
    <div>
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
