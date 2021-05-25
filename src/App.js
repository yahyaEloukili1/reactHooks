import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Accueil from "./Accueil";
import Project from "./Project";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <Switch>
              <Route path="/" exact component={Accueil} />
              <Route path="/projets" exact component={Project} />
              <Route path="/cantacts" exact component={Contact} />
              <Route path="/" component={()=><div>Error</div>}/>
            </Switch>

          

        </Router>
    </div>
  );
}

export default App;
