import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import PokemonCreate from "./components/PokemonCreate/PokemonCreate";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Success from "./components/PokemonCreate/Success";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={PokemonCreate} />
          <Route exact path="/pokemon/:id" component={Detail} />
          <Route exact path="/404" component={Error} />
          <Route exact path="/success" component={Success} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
